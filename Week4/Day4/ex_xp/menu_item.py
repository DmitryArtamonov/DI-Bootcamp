from connection import manage_connection

class MenuItem:
    def __init__(self, name, price=0):
        self.name = name
        self.price = price

    def save(self):
        query = f"INSERT INTO menu_items (item_name, item_price) VALUES ('{self.name}', {self.price})"
        return(manage_connection(query))

    def delete(self):
        query = f"DELETE FROM menu_items WHERE item_name = '{self.name}'"
        manage_connection(query)

    def update(self, new_name, new_price):
        query = f"""UPDATE menu_items
        SET item_name = '{new_name}', item_price = {new_price}
        WHERE item_name = '{self.name}'"""
        manage_connection(query)

