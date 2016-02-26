/**
 * Created by Dima on 17.02.2016.
 */

function add_to_cart(id)
{
    var key = 'product_' + id;
    var x = window.localStorage.getItem(key);
    x = x*1 + 1
    window.localStorage.setItem(key, x);

    //alert(x.toString() + "\nItems in your cart: " + get_number_products());
    update_orders_input();
    update_orders_button();
    $('#'+id.toString()).val(x);
}

function remove_to_cart(id)
{
    var key = 'product_' + id;
    var x = window.localStorage.getItem(key);
    x = x*1 - 1
    window.localStorage.setItem(key, x);

    //alert(x.toString() + "\nItems in your cart: " + get_number_products());
    update_orders_input();
    update_orders_button();
    $('#'+id.toString()).val(x);
}

function get_number_products()
{
    var total = 0;

    for(var i=0; i<window.localStorage.length; i++)
    {
        var key = window.localStorage.key(i);
        var value = window.localStorage.getItem(key);
        if (key.indexOf("product_")==0)
        {
            total = total*1 + value*1;

        }
    }
    return total;
}

function update_orders_input()
{
    var orders = get_orders();
    $('#orders_input').val(orders);
}

function update_orders_button()
{
    var text = 'Cart (' + get_number_products() + ')';
    $('#orders_button').val(text);
}

function get_orders()
{
    var orders = '';

    for(var i=0; i<window.localStorage.length; i++)
    {
        var key = window.localStorage.key(i);
        var value = window.localStorage.getItem(key);
        if (key.indexOf("product_")==0)
        {
            orders = orders + key + '= ' + value + ', ';
        }
    }
    return orders;
}

