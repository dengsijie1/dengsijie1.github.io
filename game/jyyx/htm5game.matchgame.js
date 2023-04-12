var matchingGame={};
var Num=0;
matchingGame.cardWidth=80;
matchingGame.cardHeight = 120;
matchingGame.deck=
    [
        "cardAK","cardAK", "cardAQ","cardAQ", "cardAJ","cardAJ",
        "cardBK","cardBK", "cardBQ","cardBQ", "cardBJ","cardBJ",
        "cardCK", "cardCK", "cardCQ", "cardCQ", "cardCJ", "cardCJ",
        "cardDK", "cardDK", "cardDQ", "cardDQ", "cardDJ", "cardDJ"       
    ]
function shuffle()
{    
    return Math.random()>0.5 ? -1 : 1
}
function selectCard() {
    var $fcard=$(".card-flipped");   
    if($fcard.length>1)
    {
        return;
    }
    $(this).addClass("card-flipped");
    var $fcards=$(".card-flipped");
    if($fcards.length==2)
    {     
        setTimeout(function(){
        checkPattern($fcards);},700);
    }
}
function checkPattern(cards)
{
    var pattern1 = $(cards[0]).data("pattern");
    var pattern2 = $(cards[1]).data("pattern");
    $(cards).removeClass("card-flipped");
    if(pattern1==pattern2)
    {
        $(cards).addClass("card-removed")
            .bind("webkitTransitionEnd",function(){
                $(this).remove();
        Num=Num+1;
        if (Num==24) 
        {
            alert("恭喜你成功了！");
            success=true;
        }
        });
    }
}

