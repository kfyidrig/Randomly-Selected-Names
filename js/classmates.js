	var names=["黄昌艳","张凤云","赖雨婷","向美鸿","吴燚","何琴","郑馨雨","冉茂","杨森林","彭湘宇","黄金枫",
			   "王凤芸","李仟仟","白成香","瞿原林","闫晶晶","邓渝义","杨万杰","冉淼","陈开焱","刘佳佳",
			   "吴佳璐","冉佳鑫","陈美伶","陈俊颖","唐文青","李林容","冯婧蕾","李艳莉","田晓涵","黄新","吴真珍",
			   "陈余利","张文秋","吴紫珺","易顺梅","刘黎","曾玉","王浩睿"];
	var dis_names=document.getElementsByClassName('names')[0];
	var names_list="";
	for(var i=0;i<39;i++) names_list+="<li>"+names[i]+"</li>";
	dis_names.innerHTML=names_list;
	console.log(names[0]);