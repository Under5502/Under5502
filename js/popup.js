
status="Mr.Vũ"
var a=new Array(),n=""
a[1]='Đ';
a[2]='ú';
a[3]='n';
a[4]='g';
a[5]=' ';
a[6]='v';
a[7]='ậ';
a[8]='y';
a[9]='!';
a[10]=' ';
a[11]='a';
a[12]='n';
a[13]='h';
a[14]=' ';
a[15]='V';
a[16]='ũ';
a[17]=' ';
a[18]='t';
a[19]='ố';
a[20]='t';
a[21]=' ';
a[22]='n';
a[23]='h';
a[24]='ấ';
a[25]='t';
a[26]=' ';
a[27]='v';
a[28]='ũ';
a[29]=' ';
a[30]='t';
a[31]='r';
a[32]='ụ';
a[33]=' ';
a[34]='♥';
a[35]=' ';
a[36]='Y';
a[37]='ê';
a[38]='u';
a[39]=' ';
a[40]='A';
a[41]='n';
a[42]='h';
a[43]='♥';
a[44]='♥';
function one()
{
t=document.f.txt.value
j=t.length
if(j>0)
{
for(var i=1;i<=j;i++)
{
n=n+a[i]
if(i==44)
{
document.f.txt.value=""
n=""
}
}
}
document.f.txt.value=n
n=""
setTimeout("one()",1)
}
function s()
{
}
function on()
{
one()
}

        $(document).ready(function() {
            $('#k').hide();
            $('h1').click(function() {
                $('.active').removeClass('active');
                $('#k').slideUp('fast');
                if($(this).next('#k').is(':hidden') == true) {
                $(this).addClass('active');
                $(this).next('#k').slideDown('fast');
                }
            });
        });
					function Yeu()
					{
					$("#divResult").fadeOut(0);
					$("#divResult").html("</br><h2>U LÀ TRỜI ! AI CŨNG NÓI VẬY HẾT Á <img src='http://vozforums.com/images/smilies/Off/adore.gif'</img></h2>");
					$("#divResult").fadeIn(2000,function()
							{
							$("#divResult2").fadeOut(0);
							$("#divResult2").html("<p>Mặc kệ người ta nói, Anh chỉ yêu mình Ngân hoy <3 <img src='http://vozforums.com/images/smilies/Off/angry.gif'/></p></br>");
							$("#divResult2").fadeIn(2000,function()
									{
									$("#divResult3").fadeOut(0);
									$("#divResult3").html("<p>Anh yêu em lắm ♥ <img src='http://vozforums.com/images/smilies/Off/sure.gif'/></p></br>");
									$("#divResult3").fadeIn(2000);
									}
								);
							}
						);
					}
				