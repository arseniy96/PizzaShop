/**
 * Created by Dima on 17.02.2016.
 */

function add_to_cart(pizza)
{
    var x = window.localStorage.getItem(pizza);
    x = x*1 + 1
    window.localStorage.setItem(pizza, x);
    var sum = 0;

    for(var i=0, len=localStorage.length; i<len; i++)
    {
        var key = localStorage.key(i);
        var value = localStorage[key]*1;
        sum = sum + value;
    }

    alert(pizza + ': ' + x.toString() + '\n Всего: ' + sum);
}

function remove_to_cart(pizza)
{
    var x = window.localStorage.getItem(pizza);
    x = x*1 - 1
    window.localStorage.setItem(pizza, x);
    var sum = 0;

    for(var i=0, len=localStorage.length; i<len; i++)
    {
        var key = localStorage.key(i);
        var value = localStorage[key]*1;
        sum = sum + value;
    }

    alert(pizza + ': ' + x.toString() + '\n Всего: ' + sum);
}