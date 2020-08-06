add =  function() {
result = parseInt(jQuery( '#op1' ).html()) + parseInt(jQuery( '#op2' ).html());
text= jQuery( '#op1' ).html() +  " + "   + jQuery( '#op2 ' ).html() + "  =  "
jQuery ( '#result' ).html (text  +  result);
}
sub =  function() {
result = parseInt(jQuery( '#op1' ).html()) - parseInt(jQuery( '#op2' ).html());
text= jQuery( '#op1' ).html() +  " - "   + jQuery( '#op2 ' ).html() + "  =  "
jQuery ( '#result' ).html (text  +  result);
}
mul =  function() {
result = parseInt(jQuery( '#op1' ).html()) * parseInt(jQuery( '#op2' ).html());
text= jQuery( '#op1' ).html() +  " * "   + jQuery( '#op2 ' ).html() + "  =  "
jQuery ( '#result' ).html (text  +  result);
}
div =  function() {
result = parseInt(jQuery( '#op1' ).html()) / parseInt(jQuery( '#op2' ).html());
text= jQuery( '#op1' ).html() +  " / "   + jQuery( '#op2 ' ).html() + "  =  "
jQuery ( '#result' ).html (text  +  result);
}
setup= function() {
jQuery( '#addbutton' ).click(add);
jQuery( '#subbutton' ).click(sub);
jQuery( '#mulbutton' ).click(mul);
jQuery( '#divbutton' ).click(div);
}
jQuery(document).ready(setup);
