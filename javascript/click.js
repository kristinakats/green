
						
                // });
                $(document).ready(function(){
	                $("#myBtn").click(function(){
	                    var inputValue=$("#myBtn").attr('value');
	                    
	                    if(inputValue=="Expand"){
	                    
	                        $("#main-navi").animate({height:"100%"});
	                        $("#myBtn").attr('value','Reduce');
	                        $("#myIm").attr("src", "./photos/close.png");
	                       
	                    }
	                    else if(inputValue=="Reduce")
	                    {
	                        $("#main-navi").animate({height:"86px"});
	                        $("#myBtn").attr('value','Expand');
	                        $("#myIm").attr("src", "./photos/Ei-navicon.svg.png");
	                    }

						});
				        
	                });
             


	