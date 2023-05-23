-- Get a list of all film languages.

-- Select name FROM language

-- Get a list of all films joined with their languages – select the following details : film title, description, and language name. Try your query with different joins:
-- Get all films, even if they don’t have languages.

-- Select title, description, name FROM film LEFT JOIN language ON film.language_id = language.language_id

-- Get all languages, even if there are no films in those languages.

-- SELECT title, description, name FROM film Right JOIN language ON film.language_id = language.language_id

-- Create a new table called new_film with the following columns : id, name. Add some new films to the table.

-- CREATE TABLE new_film (
-- id SERIAL NOT NULL,
-- name VARCHAR(300)
-- );
	
-- INSERT INTO new_film (name)
-- VALUES ('Green Mile'), ('Forrest Gump'), ('Tenet')

-- Create a new table called customer_review, which will contain film reviews that customers will make.
-- Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.
-- It should have the following columns:
-- review_id – a primary key, non null, auto-increment.
-- film_id – references the new_film table. The film that is being reviewed.
-- language_id – references the language table. What language the review is in.
-- title – the title of the review.
-- score – the rating of the review (1-10).
-- review_text – the text of the review. No limit on the length.
-- last_update – when the review was last updated.

-- CREATE TABLE customer_review (
-- review_id SERIAL NOT NULL,
-- film_id INT,
-- FOREIGN KEY (film_id) REFERENCES film (film_id) ON DELETE CASCADE,
-- language_id SMALLINT,	
-- FOREIGN KEY (language_id) REFERENCES language(language_id),
-- title VARCHAR(200),
-- score SMALLINT CHECK (score >= 1 and score <= 10),
-- review_text TEXT,
-- last_update DATE)

-- Select * from customer_review 

-- Add 2 movie reviews. Make sure you link them to valid objects in the other tables.

-- INSERT INTO customer_review (film_id, language_id, title, score, review_text, last_update)
-- VALUES (8, 1, 'Like it', 10, 'Very inspiring!', '2023-05-21'),
-- (312, 2, 'Belissimo!', 5, 'I fell asleep at 10 minutes', '2023-05-22')


-- Delete a film that has a review from the new_film table, what happens to the customer_review table?

-- DELETE FROM film WHERE film_id = 8

-- 🌟 Exercise 2 : DVD Rental
-- Instructions
-- Use UPDATE to change the language of some films. Make sure that you use valid languages.

-- UPDATE film
-- SET language_id = 2
-- WHERE title ILIKE 'i%'

-- Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?

-- We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?

-- DROP TABLE customer_review

-- Find out how many rentals are still outstanding (ie. have not been returned to the store yet).

-- SELECT COUNT(*) FROM rental WHERE return_date is NULL

-- Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)

-- SELECT title, rental_rate FROM film WHERE film_id in (
-- SELECT film_id FROM inventory WHERE inventory_id in ( 
-- SELECT inventory_id FROM rental WHERE return_date is NULL))
-- ORDER BY rental_rate DESC LIMIT 30 

-- Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember their names. Can you help him find which movies he wants to rent?
-- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.

-- SELECT * FROM film
-- LEFT JOIN film_actor ON film.film_id = film_actor.film_id
-- LEFT JOIN actor ON film_actor.actor_id = actor.actor_id
-- WHERE description ILIKE '%sumo wrestler%' AND first_name = 'Penelope' AND last_name = 'Monroe'

-- The 2nd film : A short documentary (less than 1 hour long), rated “R”.

-- SELECT * FROM film
-- LEFT JOIN film_category ON film.film_id = film_category.film_id
-- LEFT JOIN category ON film_category.category_id = category.category_id
-- WHERE length < 60 and rating = 'R' and category.name = 'Documentary'

-- The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.

-- SELECT * FROM film
-- JOIN inventory ON film.film_id = inventory.film_id
-- JOIN rental ON inventory.inventory_id = rental.inventory_id
-- JOIN customer ON rental.customer_id = customer.customer_id
-- WHERE first_name = 'Matthew' AND last_name ='Mahan' AND rental_rate > 4 AND return_date BETWEEN '2005-07-28' AND '2005-08-01'

-- The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace

-- SELECT * FROM film
-- JOIN inventory ON film.film_id = inventory.film_id
-- JOIN rental ON inventory.inventory_id = rental.inventory_id
-- JOIN customer ON rental.customer_id = customer.customer_id
-- WHERE first_name = 'Matthew' AND last_name ='Mahan' AND (title ILIKE '%boat%' OR description ILIKE '%boat%') ORDER BY replacement_cost DESC


