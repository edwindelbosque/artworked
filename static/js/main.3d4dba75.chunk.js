(this.webpackJsonpartworked=this.webpackJsonpartworked||[]).push([[0],{23:function(e,t,a){e.exports=a.p+"static/media/loadingGif.95cf96ca.gif"},34:function(e,t,a){e.exports=a(52)},39:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(21),i=a.n(o),c=(a(39),a(18)),s=a(11),l=a(12),u=a(14),m=a(13),f=a(15),d=(a(40),a(17)),v=a.n(d),p=a(19),h=a(30),b=(a(42),function(){var e=Object(p.a)(v.a.mark((function e(t,a){var r,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("https://itunes.apple.com/search?term=").concat(t,"&entity=").concat(a));case 3:return r=e.sent,e.next=6,r.json();case 6:return n=e.sent,e.abrupt("return",n);case 10:throw e.prev=10,e.t0=e.catch(0),console.log(e.t0.message),new Error("Failed to get results");case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,a){return e.apply(this,arguments)}}()),g=function(e,t,a,r){var n=Object(c.a)(e.results);if("Album"===t){var o=a?w(k(a,n)).sort((function(e,t){return t.releaseYear-e.releaseYear})):w(n,r);return E(o,r)}if("Single"===t){var i=A(a?k(a,n):n);return E(i,r)}if("Artist"===t)return j(n);if("Movie"===t){var s=N(n);return E(s,r)}if("App"===t)return C(n.slice(0,1));if("Podcast"===t)return F(n);if("TV Show"===t){var l=S(n);return E(l,r)}return"iBook"===t?I(n):"Audiobook"===t?y(n):void 0},E=function(e,t){return e.filter((function(e){var a=t.toUpperCase().replace(/ /g,"").normalize("NFD").replace(/[\u0300-\u036f]/g,"");return e.name.toUpperCase().replace(/ /g,"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(a)}))},k=function(e,t){return t.filter((function(t){var a=e.toUpperCase().replace(/ /g,"").normalize("NFD").replace(/[\u0300-\u036f]/g,"");return t.artistName.toUpperCase().replace(/ /g,"").normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(a)}))},O=function(e,t){var a=e.split("");a.splice(a.length-13);var r=a.join("");return"".concat(r).concat(t,"x").concat(t,".jpg")},w=function(e){return e.filter((function(e){return e.trackCount>5})).map((function(e){var t=e.artistId,a=e.artistName,r=e.artworkUrl100,n=e.collectionId,o=e.collectionName,i=e.releaseDate,c=e.trackCount;return{artistId:t,artist:a,hqArtwork:O(r,1e4),id:n,name:o,releaseYear:parseInt(i.slice(0,4)),trackCount:c}}))},A=function(e){return e.filter((function(e){return e.trackCount<=5})).map((function(e){var t=e.artistId,a=e.artistName,r=e.artworkUrl100,n=e.collectionId,o=e.collectionName,i=e.releaseDate,c=e.trackCount;return{artistId:t,artist:a,hqArtwork:O(r,1e4),id:n,name:o,releaseYear:parseInt(i.slice(0,4)),trackCount:c}}))},j=function(e){return e.map((function(e){var t=e.artistId,a=e.artistName,r=e.artworkUrl100,n=e.collectionId,o=e.collectionName,i=e.releaseDate,c=e.trackCount;return{artistId:t,artist:a,hqArtwork:O(r,1e4),id:n,name:o,releaseYear:parseInt(i.slice(0,4)),trackCount:c}}))},N=function(e){return e.map((function(e){var t=e.artworkUrl100,a=e.trackName,r=e.releaseDate,n=e.trackId;return{hqArtwork:O(t,1e4),name:a,releaseYear:parseInt(r.slice(0,4)),id:n}}))},F=function(e){return e.map((function(e){var t=e.artworkUrl100,a=e.trackName,r=e.releaseDate,n=e.collectionId;return{hqArtwork:O(t,1e4),name:a,releaseYear:parseInt(r.slice(0,4)),id:n}}))},S=function(e){return e.map((function(e){var t=e.artworkUrl100,a=e.releaseDate,r=e.collectionName,n=e.collectionId;return{hqArtwork:O(t,1e4),name:r,releaseYear:parseInt(a.slice(0,4)),id:n}}))},I=function(e){return e.map((function(e){var t=e.artworkUrl100,a=e.trackName,r=e.releaseDate,n=e.artistName,o=e.collectionId;return{artist:n,hqArtwork:O(t,1e4),name:a,releaseYear:parseInt(r.slice(0,4)),id:o}}))},y=function(e){return e.map((function(e){var t=e.artworkUrl100,a=e.collectionName,r=e.releaseDate,n=e.artistName,o=e.collectionId;return{artist:n,hqArtwork:O(t,1e4),name:a,releaseYear:parseInt(r.slice(0,4)),id:o}}))},C=function(e){return e.map((function(e){var t=e.artworkUrl100,a=e.trackName,r=e.releaseDate,n=e.trackId;return{hqArtwork:O(t,1e4),name:a,releaseYear:parseInt(r.slice(0,4)),id:n}}))},D=a(2),L=function(e){return{type:"SET_RESULTS",results:e}},T=function(e){return{type:"TOGGLE_LOADING",boolean:e}},R=function(e){return{type:"ADD_FAVORITE",item:e}},U=function(e){return{type:"REMOVE_FAVORITE",id:e}},Y=function(){return{type:"TOGGLE_FAVORITES"}},q=a(4),x=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).handleChange=function(t){if(e.setState(Object(h.a)({},t.target.name,t.target.value)),"type"===t.target.name){var a=JSON.parse(t.target.value);e.setState({type:a[0],label:a[1]})}},e.handleClick=Object(p.a)(v.a.mark((function t(){var a,r,n,o,i,c,s,l,u,m;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state,r=a.term,n=a.type,o=a.label,i=a.artist,c=e.props,s=c.setResults,l=c.toggleLoading,t.next=4,b(r,n);case 4:u=t.sent,s([]),l(!0),m=g(u,o,i,r),s(m),l(!1),console.log(g(u,o,i,r)),e.resetState();case 12:case"end":return t.stop()}}),t)}))),e.handleSubmit=function(e){e.preventDefault()},e.resetState=function(){e.setState({term:"",artist:""})},e.state={type:"album",term:"",artist:"",label:"Album"},e}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.term,r=t.artist,o=t.label,i=n.a.createElement("div",null,n.a.createElement("input",{type:"text",name:"artist",placeholder:"Enter Artist (Optional)",value:r,onChange:function(t){return e.handleChange(t)}}));return n.a.createElement("form",{className:"SearchForm",onSubmit:function(t){return e.handleSubmit(t)}},n.a.createElement("div",{className:"inputsSection"},n.a.createElement("select",{name:"type",onChange:function(t){return e.handleChange(t)}},n.a.createElement("option",{value:'["album", "Album"]'},"Album"),n.a.createElement("option",{value:'["album", "Single"]'},"Single"),n.a.createElement("option",{value:'["album", "Artist"]'},"Artist"),n.a.createElement("option",{value:'["tvSeason", "TV Show"]'},"TV Show"),n.a.createElement("option",{value:'["movie", "Movie"]'},"Movie"),n.a.createElement("option",{value:'["podcast", "Podcast"]'},"Podcast"),n.a.createElement("option",{value:'["ebook", "iBook"]'},"iBook"),n.a.createElement("option",{value:'["audiobook", "Audiobook"]'},"Audiobook"),n.a.createElement("option",{value:'["software", "App"]'},"App")),n.a.createElement("input",{type:"text",name:"term",placeholder:"Enter ".concat(o),value:a,onChange:function(t){return e.handleChange(t)}}),("Single"===o||"Album"===o)&&i),n.a.createElement("button",{onClick:this.handleClick},"FIND ARTWORK"))}}]),t}(r.Component),G=Object(D.b)(null,(function(e){return Object(q.bindActionCreators)({setResults:L,toggleLoading:T},e)}))(x),V=(a(47),a(48),a(23)),_=a.n(V),M=a(9),B=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).loadHandler=function(){e.setState({isLoaded:!0})},e.state={isLoaded:!1},e}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state.isLoaded,t=this.props,a=t.name,r=t.hqArtwork,o=t.id,i=t.isFavorites?"favorites":"search",c=e?{display:"block"}:{display:"none"};return n.a.createElement("article",{className:"ArtworkResult"},!this.state.isLoaded&&n.a.createElement("img",{alt:"loading gif",src:_.a}),n.a.createElement(M.b,{to:"/".concat(i,"/").concat(o)},n.a.createElement("img",{alt:"".concat(a," album artwork"),src:r,style:c,onLoad:this.loadHandler})))}}]),t}(r.Component),J=Object(D.b)((function(e){return{isFavorites:e.isFavorites}}))(B),W=Object(D.b)((function(e){return{results:e.results,isLoading:e.isLoading,isFavorites:e.isFavorites,favorites:e.favorites}}))((function(e){var t=e.results,a=e.isLoading,r=e.isFavorites,o=e.favorites,i=function(e){return e.map((function(e,t){var a=e.name,r=e.artist,o=e.releaseYear,i=e.hqArtwork,c=e.id;return n.a.createElement(J,{key:t,id:c,name:a,artist:r,releaseYear:o,hqArtwork:i,isLoaded:!1})}))},c=i(r?o:t),s=n.a.createElement("img",{rel:"preload",alt:"loading gif",as:"image",src:_.a,style:{width:"600px"}});return n.a.createElement(n.a.Fragment,null,a&&s,n.a.createElement("article",{className:"Container"},c))})),z=(a(50),a(51),a(16)),P=Object(D.b)((function(e){return{isFavorites:e.isFavorites}}),(function(e){return Object(q.bindActionCreators)({toggleFavorites:Y},e)}))((function(e){var t=e.isFavorites,a=e.toggleFavorites,r=t?"active":"";return n.a.createElement("nav",{className:"Nav"},n.a.createElement(z.b,{exact:!0,path:"/(|favorites)"},n.a.createElement("div",{className:"container"},n.a.createElement("h3",null,"My List"),n.a.createElement("div",{className:"slider-track ".concat(r)},n.a.createElement(M.b,{to:t?"/":"favorites"},n.a.createElement("div",{className:"slider",onClick:function(e){a()}}))))),n.a.createElement("h2",null,"Artworked"),n.a.createElement("div",null))})),H=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).componentDidMount=function(){var t=e.props,a=t.result,r=t.favorites,n=a.id;e.setState({isFavorite:!!r.find((function(e){return e.id===n}))})},e.componentWillUnmount=function(){var t=e.props,a=t.favorites,r=t.removeFavorite,n=t.addFavorite,o=t.result,i=o.id;e.state.change&&(a.find((function(e){return e.id===i}))?r(i):n(o))},e.handleToggle=function(){e.setState({change:!e.state.change,isFavorite:!e.state.isFavorite})},e.state={change:!1,isFavorite:!0},e}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.isFavorites,a=e.result,r=a.name,o=a.artist,i=a.releaseYear,c=a.hqArtwork,s=this.state.isFavorite?"is-active":"",l=t?"favorites":"";return n.a.createElement(n.a.Fragment,null,n.a.createElement(M.b,{to:"/".concat(l)},n.a.createElement("div",{className:"modal-backdrop"})),n.a.createElement(P,null),n.a.createElement("article",{className:"ArtworkModal modalContainer"},n.a.createElement("img",{alt:"".concat(r," album artwork"),src:c}),n.a.createElement("div",null,n.a.createElement("h3",{className:"title"},r),n.a.createElement("h3",{className:"artist"},o),n.a.createElement("h3",{className:"year"},i),n.a.createElement("a",{href:c,target:"_blank",rel:"noopener noreferrer",download:!0},n.a.createElement("button",{className:"artwork-button"},"Get Artwork")),n.a.createElement("div",{className:"heart ".concat(s),onClick:this.handleToggle}))))}}]),t}(r.Component),K=Object(D.b)((function(e){return{favorites:e.favorites,isFavorites:e.isFavorites}}),(function(e){return Object(q.bindActionCreators)({addFavorite:R,removeFavorite:U},e)}))(H),$=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.results,a=e.favorites;return n.a.createElement("main",{className:"App"},n.a.createElement(P,null),n.a.createElement(z.b,{exact:!0,path:"(|search/:id)",render:function(){return n.a.createElement(G,null)}}),n.a.createElement(z.b,{path:"(|search/:id)",render:function(){return n.a.createElement(W,null)}}),n.a.createElement(z.b,{path:"/(search|favorites)/:id",render:function(e){var r=e.match;console.log(r);var o=parseInt(r.params.id),i=[].concat(Object(c.a)(t),Object(c.a)(a)).find((function(e){return e.id===o}));return n.a.createElement(K,{result:i,match:r.params})}}),n.a.createElement(z.b,{render:function(){return n.a.createElement(z.a,{to:{pathname:"/"}})}}))}}]),t}(r.Component),Q=Object(D.b)((function(e){return{results:e.results,favorites:e.favorites}}))($);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var X=a(33),Z=Object(q.combineReducers)({results:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_RESULTS":return t.results;default:return e}},isLoading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_LOADING":return t.boolean;default:return e}},favorites:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_FAVORITE":return[].concat(Object(c.a)(e),[t.item]);case"REMOVE_FAVORITE":return e.filter((function(e){return e.id!==t.id}));default:return e}},isFavorites:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_FAVORITES":return!e;default:return e}}}),ee=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){console.error(t)}}(),te=Object(q.createStore)(Z,ee,Object(X.composeWithDevTools)());te.subscribe((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(a){console.error(a)}}({results:te.getState().results,favorites:te.getState().favorites,isFavorites:te.getState().isFavorites})})),i.a.render(n.a.createElement(D.a,{store:te},n.a.createElement(M.a,null,n.a.createElement(Q,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.3d4dba75.chunk.js.map