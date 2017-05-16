$(function(){
    $('#myResume').fullpage({
    	verticalCentered:true,
    	sectionsColor:['#1bbc9b', '#4bbfc3', '#336699', '#6699CC'],
    	navigationTooltips: ['首页', '个人信息', '作品展示', '联系方式'],
    	navigation:true,
    	loopTop:true,
    	loopBottom:true,
    	css3:true,
    	afterLoad:function(anchorLink,index){
    		if(index==1){
    			test('.section1','p','bottomIn');
    		}
    		if(index==2){
    			test('.section2','dl','opacityIn');
    		}
    		if(index==3){
    			test('.section3','li','leftIn');
    		}
    		if(index==4){
    			setInterval(function(){
    				test('.section4','h2','fadeIn');
    				test('.section4','h2','fadeOut');
    			},1000);
    			test('.section4','li','rightIn');
    		}
    	},
    	onLeave:function(index,direction){
    		if(index==1){
    			test('.section1','p','bottomOut');
    		}
    		if(index==2){
    			test('.section2','dl','opacityOut');
    		}
    		if(index==3){
    			test('.section3','li','leftOut');
    		}
    		if(index==4){
    			test('.section4','li','rightOut');
    		}
    	}
    });
});

function test(tabclass,tab,str){
	$(tabclass).find(tab).each(function(index){
			setInterval(transform($(this),index,str),500);
		}
	);
}

function transform($this,index,str){
	switch(str){
		case 'leftIn':
			$this.delay(500*(index+1)).animate({left:"0"},1500+(index+1)*100,'easeOutExpo');
			break;
		case 'leftOut':
			$this.animate({left:"-100%"},100,'easeOutExpo');
			break;
		case 'rightIn':
			if((index+1)%2==0){
				$this.delay(200+(index)*500).animate({right:"0"},1500+(index+1)*100,'easeOutExpo');
			}else{
				$this.delay(200+(index)*500).animate({left:"0"},1500+(index+1)*100,'easeOutExpo');
			}
			break;
		case 'rightOut':
			if((index+1)%2==0){
				$this.animate({right:"-100%"},1500,'easeOutExpo');
			}else{
				$this.animate({left:"-100%"},1500,'easeOutExpo');
			}
			break;
		case 'opacityIn':
			$this.delay(200+(index)*100).animate({opacity:"1"},1500+(index+1)*500,'easeOutExpo');
			break;
		case 'opacityOut':
			$this.animate({opacity:"0"},1500,'easeOutExpo');
			break;
		case 'bottomIn':
			$this.delay(100).animate({bottom:'0'},1500+(index+1)*100,'easeOutExpo');
			break;
		case 'bottomOut':
			$this.delay(100).animate({bottom:'-100%'},1500+(index+1)*100,'easeOutExpo');
			break;
		case 'fadeIn':
			$this.fadeIn(2000);
			break;
		case 'fadeOut':
			$this.fadeOut(1000);
			break;
	}
	
}