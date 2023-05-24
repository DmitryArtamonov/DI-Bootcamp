from menu_item import MenuItem
from menu_manager import MenuManager

def show_user_menu():
    while True:
        ans = input('''--------------
View an Item (V)
Add an Item (A)
Delete an Item (D)
Update an Item (U)
Show the Menu (S)
Exit (E)
--------------\n''')
        if ans.lower() in ['a','v','d','u','s','e']:
            return ans.lower()
        else:
            print('Wrong input\n')

def view_item():
    item = input('Input name: ')
    res = MenuManager.get_by_name(item)
    print(res[1], res[2])

def add_item_to_menu():
    item = MenuItem(input('Input name: '), int(input('Input price: ')))
    res = item.save()
    if res != 'ERROR':
        print('item was added successfully')

def remove_item_from_menu():
    name = input('Input name: ')
    if MenuManager.get_by_name(name):
        item = MenuItem(name)
        res = item.delete()
        if res != 'ERROR':
            print('item was deleted successfully')
    else:
        print('No such item\n')

def update_item_from_menu():
    name = input('Input name: ')
    new_name, new_price = input('Input new name: '), int(input('Input new price: '))
    if MenuManager.get_by_name(name):
        item = MenuItem(name)
        res = item.update(new_name,new_price)
        if res != 'ERROR':
            print('item was updated successfully')
    else:
        print('No such item\n')

def show_restaurant_menu():
    res = MenuManager.all_items()
    for i in res:
        print(i[1], i[2])

def main():
    choice = {
        'v': 'view_item()',
        'a': 'add_item_to_menu()',
        'd': 'remove_item_from_menu()',
        'u': 'update_item_from_menu()',
        's': 'show_restaurant_menu()'
    }
    while True:
        res = show_user_menu()
        if res == 'e':
            show_restaurant_menu()
            break
        else:
            eval(choice[res])

main()