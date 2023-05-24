import psycopg2


def manage_connection(query):
    # connect to the DATABASE
    connection = None
    try:
        connection = psycopg2.connect(
            database="W4D4",
            user='postgres',
            password='123',
            host='localhost',
            port='5432'
        )

        with connection:
            with connection.cursor() as cursor:
                cursor.execute(query)
                try:
                    result = cursor.fetchall()
                    return result
                except:
                    return None

    except Exception as e:
        print(f'ERROR: {e}')
        return('ERROR')

    finally:
        if connection is not None:
            connection.close()



