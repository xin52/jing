<template>
	<div class="main">
   <router-view></router-view>
   
       
        <footer class="footer">
         <router-link to="/shou" tag="div"><i class="icon iconfont">&#xe660;</i>首页</router-link>
          <router-link to="/fei" tag="div"><i class="icon iconfont">&#xe65f;</i>分类</router-link>
          <router-link to="/find" tag="div"><i class="icon iconfont">&#xe65e;</i>发现</router-link>
          <router-link to="/shop" tag="div"><i class="icon iconfont">&#xe65c;</i>购物</router-link>
          <router-link to="/mine" tag="div"><i class="icon iconfont">&#xe65c;</i>我的</router-link>
        </footer>


	</div>
</template>
<script>
   import $ from 'jquery'
	export default{
		mounted(){
			var banner=new Swiper(".list",{
				autoplay:2000,
				pagination: '.swiper-pagination'
			})
			var bb=new Swiper(".div",{
				
                autoplay:1000,
                loop:true,
               direction:"vertical"
			})

          
        //   $(document).on('mousewheel', function(){
        //     var top=$(".content").scrollTop();
        //     if(top>70){
        //        $(".top").addClass("on");
        //     }else{
                
        //          $(".top").removeClass("on");
        //     }
        // });



		}
	} 

</script>
<style>
 *{
    padding:0;
    margin:0;
    font-weight: ;
    list-style:none;
    text-decoration: none;
    box-sizing: border-box;
  }
  html,body,.main{
  	width: 100%;
  	height: 100%;
  }
  .main{
  	display: flex;
  	flex-direction:column;
  }
  .ttp{
  	width: 100%;
  	height: auto;
  }
  .header{
  	width: 100%;
  	height:auto;
  
  
  }
  .header img{
  	width: 100%;
  	height: 100%;

  }
  .ri{
    width: 100%;
    display: flex;

    justify-content:center;
    align-items:center;
  }
  .ri dl{
    width: 100%;
    height: 100%;
    flex:1;
    padding: 0 0.15rem;
   
  }
   .ri dl dd{
    padding: 0.2rem 0;
   }
  .ri dl dd h4{
      color: #000;
      font-weight: bold;
      font-size: 0.25rem;
  }
  .ri dl dd p{
    color: pink;
    font-size: 0.20rem;
    padding-top: 0.15rem;
  }
  .ri dl dt img{
    width:100%;
    height: 100%;
  }
  .long img{
    width:100%;
    height: 100%;
  }
  .top{
     height: 0.7rem;
     flex-shrink:0;
     z-index: 999;
     
     line-height: 0.6rem;
     position: fixed;
     top:0;
  }
  .on{
    background: orange;
  }
  .top a{
  	padding:0 0.25rem;
  	
  }
  .top .two{
  padding-bottom: 0.15rem;

  }
  .top .two input{
  	width: 4rem;
  	height: 0.5rem;
  	border:0;
    padding-left: 0.4rem;
  	border:1px solid #ccc;
  	border-radius: 0.4rem;
  	position: relative;
    outline: 0;
  }
 .top  u{
  	position: absolute;
  	top:7px;
  	left:65px;
  }
  
  .top a i{
  	color: #fff;
  	font-size: 0.4rem;

  }
  .content{
  	width: 100%;
  	flex:1;
    overflow-y:auto;

  }
  
  .pic{
  	width: 100%;
  	height: 1.5rem;

  }
  .pic img{
  	width: 100%;
  	height: 100%;
  	border-top-left-radius:10px;
  }
  .list{
  	width: 100%;
  	height: auto;
  	background: #ccc;
  	
  	
  }
.list_main{
	display: flex;
	flex-wrap:wrap;
	
	align-items: flex-start;
   padding-top: 0.15rem;
}
.list_main li{
	width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    
   
	
}

 .list_main li img {
 	 display: block;
 	 height: 0.7rem;
 	 margin-bottom: 0.25rem;
   padding-top: 0.15rem;
 	  
 }
  .list_main li img span{
  	  font-size: 0.3rem;
  	  

  }
  .list .dian{
     
    padding-top:2rem;
  }
  .opp{
    width: 100%;
    height: 0.8rem;
    background: #ccc;

  }
  .jid{
  	width: 90%;
  	background: #fff;
    border-radius: 0.2rem;
  	display: flex;
  	margin: 0 auto;
  	background:#fff; 
  	 height: 0.5rem;
  	display: flex;
  	justify-content:space-between;
  	align-items:center;
  	padding: 0 0.15rem;
  }
  .div{
     flex:1;
  	display: flex;
  	justify-content:flex-start;
  	/*margin-left: 0.15rem;*/
  	height: 0.8rem;
    padding-left: 0.35rem;

  }

  .jin h3{
     font-size: 0.25rem;
     color: #000;
     font-weight: bold;
  }
.jin b{
	background: red;
	color: #fff;
}
.span{
	float: right;
}
.kk{
	line-height: 0.8rem;
}
.kk li{
  font-size: 0.18rem;
}
.kk li b{
  color: red;
  font-weight: bold;
  font-size: 0.18rem;
  margin-right: 0.15rem;
}
.max{
   width: 100%;
   height: auto;
}
.from{
  width: 100%;
  height: 0.6rem;
  display: flex;
  align-items:center;
  padding: 0 0.2rem;
}
.from h4{
  display: flex;

}
.from h4 u{
  color: red;
  font-weight: bold;
  font-size: 0.26rem;

}
.from h4 p{
  color: #000;
  font-size: 0.20rem;
  margin-left: 0.15rem;
}
.from h4 em{
  padding-left: 0.2rem;
}
.from h4 em span{
  background: #000;
  color: #fff;

}
.from h4 b{
padding-left: 0.4rem;
color: red;
}

.dll{
  width: 100%;
  height: auto;
  display: flex;

  justify-content:center;
  align-items:center;

}
.dll dl{
  flex:1;
  padding: 0.15rem 0.15rem;

}
.dll dl dt{
  width: 100%;
  height: 1.5rem;

}
.dll dl dt img{
  width: 100%;
  height: 100%;
  margin-top: 0.15rem;
}
.dll dl dd{
   text-align: center;
   padding: 0.15rem 0;
}
.dll dl dd h5{
  font-size: 0.18rem;
  color: red;
}
.dll dl dd h5 i{
  font-size: 0.3rem;
  font-weight: bold;
}
.dll dl dd s{
  text-decoration: line-through;
  color: #999;
  font-size: 0.25rem;
}


.zhuan{
  width: 100%;
  height: auto;
  display: flex;
  padding-top: 0.15rem;
 
}
.da{
  height: auto;
   padding: 0 0.15rem;
  
}
.good{

}
.good h6{
  color: blue;
  font-weight: bold;
  font-size: 0.28rem;

}
.good p{
  color: #000;
  font-size: 0.24rem;
  margin-top: 0.1rem;

}
.imm{
   padding: 0.15rem 0.22rem;
}
.imm u{
  padding: 0 0.1rem;
}
.imm u img{
  width:  40%;
  height: 40%;
}


.pcc {
  width: 100%;
  height: auto;
}

.pcc img{
  width: 100%;
  height: 100%;
}
.gou {
  width: 100%;
  height: 0.5rem;
  background: #ccc;

}
.gou p{
  line-height: 0.5rem;
  text-align: center;
  letter-spacing: 0.2rem;
  font-size: 0.35rem;
}




  .footer{
  	width: 100%;
  	height: 1rem;
  	display: flex;
  	flex-shrink:0;
  	align-items:center;
    position: fixed;
    bottom: 0;
    background: #fff;
  }
  .footer div{
       flex:1;
       display: flex;
       justify-content:center;
       align-items:center;
       flex-direction:column;
       font-size: 0.1rem;
  }
  .footer div i{
  	font-size: 0.4rem;
  	margin-bottom: 0.1rem;
  }
  .bg{
  	color: red;
  }
 

</style>