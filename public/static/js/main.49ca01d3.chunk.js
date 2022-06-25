(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(55)},32:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(17),i=a.n(l),o=(a(32),a(18)),s=a(19),d=a(22),c=a(20),u=a(6),m=a(23),g=a(21),h=a.n(g),_=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(c.a)(t).call(this,e))).api_key=Object({NODE_ENV:"production",PUBLIC_URL:""}).REACT_APP_NASA_API_KEY,a.start_date=a.getTodayUTCDate(new Date),a.end_date=a.start_date,a.state={error:null,isLoaded:!1,items:[],currentLocalTime:null,currentUTCTime:null},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"paddingLeftZeros",value:function(e){return"0"+e}},{key:"format_date",value:function(e,t,a){return e+"-"+t+"-"+a}},{key:"format_time",value:function(e,t){return e+":"+t}},{key:"getTodayUTCDate",value:function(e){var t=e.getUTCDate().toString(),a=(e.getUTCMonth()+1).toString(),n=e.getUTCFullYear().toString();return 1===t.length&&(t=this.paddingLeftZeros(t)),1===a.length&&(a=this.paddingLeftZeros(a)),this.format_date(n,a,t)}},{key:"getTodayUTCTime",value:function(e){var t=e.getUTCHours().toString(),a=e.getUTCMinutes().toString();return 1===t.length&&(t=this.paddingLeftZeros(t)),1===a.length&&(a=this.paddingLeftZeros(a)),this.format_time(t,a)}},{key:"getTodayUTCDateTime",value:function(e){return this.getTodayUTCDate(e)+" "+this.getTodayUTCTime(e)}},{key:"getTodayLocalDate",value:function(e){var t=e.getDate().toString(),a=(e.getMonth()+1).toString(),n=e.getFullYear().toString();return 1===t.length&&(t=this.paddingLeftZeros(t)),1===a.length&&(a=this.paddingLeftZeros(a)),this.format_date(n,a,t)}},{key:"getTodayLocalTime",value:function(e){var t=e.getHours().toString(),a=e.getMinutes().toString();return 1===t.length&&(t=this.paddingLeftZeros(t)),1===a.length&&(a=this.paddingLeftZeros(a)),this.format_time(t,a)}},{key:"getTodayLocalDateTime",value:function(e){return this.getTodayLocalDate(e)+" "+this.getTodayLocalTime(e)}},{key:"parseDetectionDate",value:function(e,t){var a=e.split(" "),n=a[0].split("-"),r=n[0],l={Jan:0,Feb:1,Mar:2,Apr:3,May:4,Jun:5,Jul:6,Aug:7,Sep:8,Oct:9,Nov:10,Dec:11}[n[1]],i=n[2],o=a[1].split(":"),s=o[0],d=o[1],c=new Date(Date.UTC(r,l,i,s,d));return!0===t?this.getTodayLocalDateTime(c):this.getTodayUTCDateTime(c)}}]),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t={method:"GET",url:"https://neo-today.herokuapp.com/neo",params:{start_date:this.start_date,end_date:this.end_date}};h.a.request(t).then(function(t){var a=[!0,!1].reduce(function(e,t,a){return Object.assign(e,Object(o.a)({},t,a))},{});t.data.sort(function(e,t){return a[e.is_potentially_hazardous_asteroid]-a[t.is_potentially_hazardous_asteroid]});var n=new Date;e.setState({isLoaded:!0,items:t.data,currentLocalTime:e.getTodayLocalDateTime(n),currentUTCTime:e.getTodayUTCDateTime(n)})},function(t){e.setState({isLoaded:!0,error:t})})}},{key:"render",value:function(){var e=this,t=this.state,a=t.error,n=t.isLoaded,l=t.items;return a?r.a.createElement("div",null,"error: ",a.message):n?r.a.createElement("div",{id:"bg"},r.a.createElement("h1",{className:"center"},"NEO (Asteroids)"),r.a.createElement("div",{id:"time",className:"left"},r.a.createElement("h3",null,"Curent time"),r.a.createElement("span",{className:"left"},r.a.createElement("b",null,"Local time:")," ",this.state.currentLocalTime),r.a.createElement("span",{className:"left"},r.a.createElement("b",null,"UTC time:")," ",this.state.currentUTCTime)),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Name"),r.a.createElement("td",null,"Brightness (H)"),r.a.createElement("td",null,"Estimated Diameter Minimum (Km)"),r.a.createElement("td",null,"Estimated Diameter Maximum (km)"),r.a.createElement("td",null,"Potentially Hazardous Asteroid?"),r.a.createElement("td",null,"Date of Detection (UTC)"),r.a.createElement("td",null,"Date of Detection (Local)"),r.a.createElement("td",null,"How Fast? (Km/s)"),r.a.createElement("td",null,"How Far From Us? (Km)"))),r.a.createElement("tbody",null,l.map(function(t){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.absolute_magnitude_h),r.a.createElement("td",null,t.estimated_diameter.kilometers.estimated_diameter_min," "),r.a.createElement("td",null,t.estimated_diameter.kilometers.estimated_diameter_max),r.a.createElement("td",{className:t.is_potentially_hazardous_asteroid?"Red":"Green"},t.is_potentially_hazardous_asteroid?"Yes":"No"),r.a.createElement("td",null,e.parseDetectionDate(t.close_approach_data[0].close_approach_date_full,!1)),r.a.createElement("td",null,e.parseDetectionDate(t.close_approach_data[0].close_approach_date_full,!0)),r.a.createElement("td",null,t.close_approach_data[0].relative_velocity.kilometers_per_second),r.a.createElement("td",null,t.close_approach_data[0].miss_distance.kilometers))})))):r.a.createElement("div",null,"Loading ... ")}}]),t}(r.a.Component),T=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,56)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,l=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),l(e),i(e)})};i.a.createRoot(document.getElementById("root")).render(r.a.createElement(_,null)),T()}},[[24,1,2]]]);
//# sourceMappingURL=main.49ca01d3.chunk.js.map