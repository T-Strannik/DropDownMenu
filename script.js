(function($){
	
	$('nav>ul>li:eq(0)').hover(function(){
		$('nav>ul>li:eq(0)>ul').slideToggle(250);;
	}); //-Автомобили->: газ,мерс,вольво

	$('nav>ul>li:eq(0)>ul>li:eq(0)').hover(function(){
		$('nav>ul>li:eq(0)>ul>li:eq(0)>ul').slideToggle(250);;
	}); //-Автомобили->: газ ->:газель,соболь

	$('nav>ul>li:eq(0)>ul>li:eq(1)').hover(function(){
		$('nav>ul>li:eq(0)>ul>li:eq(1)>ul').slideToggle(250);;
	});//-Автомобили->: мерс ->:газель,соболь

	$('nav>ul>li:eq(0)>ul>li:eq(2)').hover(function(){
		$('nav>ul>li:eq(0)>ul>li:eq(2)>ul').slideToggle(250);;
	});//-Автомобили->: вольво ->:газель,соболь



	$('nav>ul>li:eq(1)').hover(function(){
		$('nav>ul>li:eq(1)>ul').slideToggle(250);;
	}); //-Спецтехника->: тракторы, комбайны, насосы

	$('nav>ul>li:eq(1)>ul>li:eq(0)').hover(function(){
		$('nav>ul>li:eq(1)>ul>li:eq(0)>ul').slideToggle(250);;
	}); //-Спецтехника->: тракторы ->: хтз, джон дир

	$('nav>ul>li:eq(1)>ul>li:eq(1)').hover(function(){
		$('nav>ul>li:eq(1)>ul>li:eq(1)>ul').slideToggle(250);;
	}); //-Спецтехника->: комбайны ->: скд-5

	$('nav>ul>li:eq(1)>ul>li:eq(2)').hover(function(){
		$('nav>ul>li:eq(1)>ul>li:eq(2)>ul').slideToggle(250);;
	}); //-Спецтехника->: насосы ->: брдм-2


	//запчасти
	$('nav>ul>li:eq(2)').hover(function(){
		$('nav>ul>li:eq(2)>ul').slideToggle(250);;
	}); 

	$('nav>ul>li:eq(2)>ul>li:eq(0)').hover(function(){
		$('nav>ul>li:eq(2)>ul>li:eq(0)>ul').slideToggle(250);;
	}); 

	$('nav>ul>li:eq(2)>ul>li:eq(1)').hover(function(){
		$('nav>ul>li:eq(2)>ul>li:eq(1)>ul').slideToggle(250);;
	}); 

	$('nav>ul>li:eq(2)>ul>li:eq(2)').hover(function(){
		$('nav>ul>li:eq(2)>ul>li:eq(2)>ul').slideToggle(250);;
	}); 


	//Масла
	$('nav>ul>li:eq(3)').hover(function(){
		$('nav>ul>li:eq(3)>ul').slideToggle(250);;
	}); 

	$('nav>ul>li:eq(3)>ul>li:eq(0)').hover(function(){
		$('nav>ul>li:eq(3)>ul>li:eq(0)>ul').slideToggle(250);;
	}); 

	$('nav>ul>li:eq(3)>ul>li:eq(1)').hover(function(){
		$('nav>ul>li:eq(3)>ul>li:eq(1)>ul').slideToggle(250);;
	}); 

	$('nav>ul>li:eq(3)>ul>li:eq(2)').hover(function(){
		$('nav>ul>li:eq(3)>ul>li:eq(2)>ul').slideToggle(250);;
	}); 


	//Шины
	$('nav>ul>li:eq(4)').hover(function(){
		$('nav>ul>li:eq(4)>ul').slideToggle(250);;
	}); 

	$('nav>ul>li:eq(4)>ul>li:eq(0)').hover(function(){
		$('nav>ul>li:eq(4)>ul>li:eq(0)>ul').slideToggle(250);;
	}); 

	$('nav>ul>li:eq(4)>ul>li:eq(1)').hover(function(){
		$('nav>ul>li:eq(4)>ul>li:eq(1)>ul').slideToggle(250);;
	}); 

	$('nav>ul>li:eq(4)>ul>li:eq(2)').hover(function(){
		$('nav>ul>li:eq(4)>ul>li:eq(2)>ul').slideToggle(250);;
	}); 

})(jQuery)