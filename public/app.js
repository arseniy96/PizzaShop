/**
 * Created by Dima on 17.02.2016.
 */

function something(pizza)
{
    var x = window.localStorage.getItem(pizza);
    x = x*1 + 1
    window.localStorage.setItem(pizza, x);

    alert(pizza + ': ' + x.toString());
}