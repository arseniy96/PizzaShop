/**
 * Created by Dima on 17.02.2016.
 */

function something()
{
    var x = window.localStorage.getItem('aaa');
    
    window.localStorage.setItem('aaa', 555);

    alert(x);
}