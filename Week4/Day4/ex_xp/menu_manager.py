from connection import manage_connection

class MenuManager:
    @classmethod
    def get_by_name(cls, name):
        query = f"SELECT * FROM menu_items WHERE item_name = '{name}' LIMIT 1"
        res = manage_connection(query)
        if res:
            return res[0]
        else:
            return None

    @classmethod
    def all_items(cls):
        query = f"SELECT * FROM menu_items"
        res = manage_connection(query)
        return res
