__d(function(g,r,i,a,m,e,d){'use strict';var t=r(d[0]),n=r(d[1]),o=r(d[2]),l=r(d[3]),s=r(d[4]),c=r(d[5]),u=r(d[6]),p=u.Image,h=u.StyleSheet,b=u.Text,f=u.TouchableWithoutFeedback,E=u.TouchableOpacity,v=u.View,y=u.ViewPagerAndroid,P=['#fdc08e','#fff6b9','#99d1b7','#dde5fe','#f79273'],S=['https://apod.nasa.gov/apod/image/1410/20141008tleBaldridge001h990.jpg','https://apod.nasa.gov/apod/image/1409/volcanicpillar_vetter_960.jpg','https://apod.nasa.gov/apod/image/1409/m27_snyder_960.jpg','https://apod.nasa.gov/apod/image/1409/PupAmulti_rot0.jpg','https://apod.nasa.gov/apod/image/1510/lunareclipse_27Sep_beletskycrop4.jpg'],k=(function(u){function p(){var n,s;t(this,p);for(var c=arguments.length,u=new Array(c),h=0;h<c;h++)u[h]=arguments[h];return(s=o(this,(n=l(p)).call.apply(n,[this].concat(u)))).state={likes:7},s.onClick=function(){s.setState({likes:s.state.likes+1})},s}return s(p,u),n(p,[{key:"render",value:function(){return c.createElement(v,{style:T.likeContainer},c.createElement(E,{onPress:this.onClick,style:T.likeButton},c.createElement(b,{style:T.likesText},"\ud83d\udc4d Like")),c.createElement(b,{style:T.likesText},this.state.likes+' likes'))}}]),p})(c.Component),x=(function(u){function p(){var n,s;t(this,p);for(var c=arguments.length,u=new Array(c),h=0;h<c;h++)u[h]=arguments[h];return(s=o(this,(n=l(p)).call.apply(n,[this].concat(u))))._handlePress=function(){s.props.enabled&&s.props.onPress&&s.props.onPress()},s}return s(p,u),n(p,[{key:"render",value:function(){return c.createElement(f,{onPress:this._handlePress},c.createElement(v,{style:[T.button,this.props.enabled?{}:T.buttonDisabled]},c.createElement(b,{style:T.buttonText},this.props.text)))}}]),p})(c.Component),C=(function(u){function p(){return t(this,p),o(this,l(p).apply(this,arguments))}return s(p,u),n(p,[{key:"render",value:function(){var t=(this.props.progress.position+this.props.progress.offset)/4*this.props.size;return c.createElement(v,{style:[T.progressBarContainer,{width:this.props.size}]},c.createElement(v,{style:[T.progressBar,{width:t}]}))}}]),p})(c.Component),w=(function(u){function h(){var n,s;t(this,h);for(var c=arguments.length,u=new Array(c),p=0;p<c;p++)u[p]=arguments[p];return(s=o(this,(n=l(h)).call.apply(n,[this].concat(u)))).state={page:0,animationsAreEnabled:!0,scrollEnabled:!0,progress:{position:0,offset:0}},s.onPageSelected=function(t){s.setState({page:t.nativeEvent.position})},s.onPageScroll=function(t){s.setState({progress:t.nativeEvent})},s.onPageScrollStateChanged=function(t){s.setState({scrollState:t})},s.move=function(t){var n=s.state.page+t;s.go(n)},s.go=function(t){s.state.animationsAreEnabled?s.viewPager.setPage(t):s.viewPager.setPageWithoutAnimation(t),s.setState({page:t})},s}return s(h,u),n(h,[{key:"render",value:function(){for(var t=this,n=[],o=0;o<5;o++){var l={backgroundColor:P[o%P.length],alignItems:'center',padding:20};n.push(c.createElement(v,{key:o,style:l,collapsable:!1},c.createElement(p,{style:T.image,source:{uri:S[o%P.length]}}),c.createElement(k,null)))}var s=this.state,u=s.page,h=s.animationsAreEnabled;return c.createElement(v,{style:T.container},c.createElement(y,{style:T.viewPager,initialPage:0,scrollEnabled:this.state.scrollEnabled,onPageScroll:this.onPageScroll,onPageSelected:this.onPageSelected,onPageScrollStateChanged:this.onPageScrollStateChanged,pageMargin:10,ref:function(n){t.viewPager=n}},n),c.createElement(v,{style:T.buttons},c.createElement(x,{enabled:!0,text:this.state.scrollEnabled?'Scroll Enabled':'Scroll Disabled',onPress:function(){return t.setState({scrollEnabled:!t.state.scrollEnabled})}})),c.createElement(v,{style:T.buttons},h?c.createElement(x,{text:"Turn off animations",enabled:!0,onPress:function(){return t.setState({animationsAreEnabled:!1})}}):c.createElement(x,{text:"Turn animations back on",enabled:!0,onPress:function(){return t.setState({animationsAreEnabled:!0})}}),c.createElement(b,{style:T.scrollStateText},"ScrollState[ ",this.state.scrollState," ]")),c.createElement(v,{style:T.buttons},c.createElement(x,{text:"Start",enabled:u>0,onPress:function(){return t.go(0)}}),c.createElement(x,{text:"Prev",enabled:u>0,onPress:function(){return t.move(-1)}}),c.createElement(b,{style:T.buttonText},"Page ",u+1," / ",5),c.createElement(C,{size:100,progress:this.state.progress}),c.createElement(x,{text:"Next",enabled:u<4,onPress:function(){return t.move(1)}}),c.createElement(x,{text:"Last",enabled:u<4,onPress:function(){return t.go(4)}})))}}]),h})(c.Component),T=h.create({buttons:{flexDirection:'row',height:30,backgroundColor:'black',alignItems:'center',justifyContent:'space-between'},button:{flex:1,width:0,margin:5,borderColor:'gray',borderWidth:1,backgroundColor:'gray'},buttonDisabled:{backgroundColor:'black',opacity:.5},buttonText:{color:'white'},scrollStateText:{color:'#99d1b7'},container:{flex:1,backgroundColor:'white'},image:{width:300,height:200,padding:20},likeButton:{backgroundColor:'rgba(0, 0, 0, 0.1)',borderColor:'#333333',borderWidth:1,borderRadius:5,flex:1,margin:8,padding:8},likeContainer:{flexDirection:'row'},likesText:{flex:1,fontSize:18,alignSelf:'center'},progressBarContainer:{height:10,margin:10,borderColor:'#eeeeee',borderWidth:2},progressBar:{alignSelf:'flex-start',flex:1,backgroundColor:'#eeeeee'},viewPager:{flex:1}});e.title='<ViewPagerAndroid>',e.description='Container that allows to flip left and right between child views.',e.examples=[{title:'Basic pager',render:function(){return c.createElement(w,null)}}]},666825,[3,4,5,8,9,11,15]);