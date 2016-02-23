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
    update_orders();
}

function remove_to_cart(id)
{
    var key = 'product_' + id;
    var x = window.localStorage.getItem(key);
    x = x*1 - 1
    window.localStorage.setItem(key, x);

    //alert(x.toString() + "\nItems in your cart: " + get_number_products());
    update_orders();
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

function update_orders()
{
    var orders = get_orders();
    $('#orders_input').val(orders);
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