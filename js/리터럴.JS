var user={
    name:"hanbi",
    age:17
    }
    document.write("name="+user.name+", age="+user.age);
    
    //탭메뉴 관련 변수
    var $tabMenu=null;
    var $menuItems=null;
    var $selectMenuItem=null;

    $menuItems(document).ready(function(){
        //탭메뉴 요소 초기화
        init();
        //탭메뉴 요소에 이벤트 등록
        initEvent();
    });

    //요소 초기화
    function init()
    {
        $tabMenu=$("#tabMenu1");
        $menuItems=$tabMenu.find("li");
    }
    //이벤트 등록
    function initEvent()
    {
        $menuItems.on("click", function(){
            setSelectItem($(this));
        });
    }
    //$menuItem에 해당하는 메뉴 아이템 선택하기
    function setSelectItem($menuItem)
    {
        //기준 선택메뉴 아이템을 비활성화 터리하기
        if($selectMenuItem){
            $selectMenuItem.removeClass("select");
        }
        //신규 아이템 활성화 처리하기
        $selectMenuItem=$menuItem;
        $selectMenuItem.addClass("select");
    }
    