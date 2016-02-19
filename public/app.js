/**
 * Created by Dima on 17.02.2016.
 */

function something()
{
    var x = window.localStorage.getItem('bbb');
    x = x*1 + 1
    window.localStorage.setItem('bbb', x);

    alert(x);
}