"use strict";(self.webpackChunktgstation_server_control_panel=self.webpackChunktgstation_server_control_panel||[]).push([[767],{1767:function(e,t,a){var r=a(653),n=a(6846),o=a(3803),s=a(5631),c=a(7961);t.Z=new class extends r.S{async listChatBots(e,{page:t=1,pageSize:a=c.ZP.itemsperpage.value}){let r;await s.Z.wait4Init();try{r=await s.Z.apiClient.chat.chatControllerList({page:t,pageSize:a},{headers:{Instance:e.toString()}})}catch(e){return new o.Z({code:o.G.ERROR,error:e})}return 200===r.status?new o.Z({code:o.G.OK,payload:r.data}):new o.Z({code:o.G.ERROR,error:new n.ZP(n.jK.UNHANDLED_RESPONSE,{axiosResponse:r},r)})}async createChatBot(e,t){let a;await s.Z.wait4Init();try{a=await s.Z.apiClient.chat.chatControllerCreate(t,{headers:{Instance:e.toString()}})}catch(e){return new o.Z({code:o.G.ERROR,error:e})}return 201===a.status?new o.Z({code:o.G.OK,payload:a.data}):new o.Z({code:o.G.ERROR,error:new n.ZP(n.jK.UNHANDLED_RESPONSE,{axiosResponse:a},a)})}async updateChatBot(e,t){let a;await s.Z.wait4Init();try{a=await s.Z.apiClient.chat.chatControllerUpdate(t,{headers:{Instance:e.toString()}})}catch(e){return new o.Z({code:o.G.ERROR,error:e})}switch(a.status){case 200:return new o.Z({code:o.G.OK,payload:a.data});case 204:return new o.Z({code:o.G.OK,payload:null});case 410:return new o.Z({code:o.G.ERROR,error:new n.ZP(n.jK.NO_DB_ENTITY,{errorMessage:a.data},a)});default:return new o.Z({code:o.G.ERROR,error:new n.ZP(n.jK.UNHANDLED_RESPONSE,{axiosResponse:a},a)})}}async getChatBot(e,t){let a;await s.Z.wait4Init();try{a=await s.Z.apiClient.chat.chatControllerGetId(t,{headers:{Instance:e.toString()}})}catch(e){return new o.Z({code:o.G.ERROR,error:e})}switch(a.status){case 200:return new o.Z({code:o.G.OK,payload:a.data});case 410:return new o.Z({code:o.G.ERROR,error:new n.ZP(n.jK.NO_DB_ENTITY,{errorMessage:a.data},a)});default:return new o.Z({code:o.G.ERROR,error:new n.ZP(n.jK.UNHANDLED_RESPONSE,{axiosResponse:a},a)})}}async deleteChatBot(e,t){let a;await s.Z.wait4Init();try{a=await s.Z.apiClient.chat.chatControllerDelete(t,{headers:{Instance:e.toString()}})}catch(e){return new o.Z({code:o.G.ERROR,error:e})}switch(a.status){case 204:return new o.Z({code:o.G.OK,payload:null});case 410:return new o.Z({code:o.G.ERROR,error:new n.ZP(n.jK.NO_DB_ENTITY,{errorMessage:a.data},a)});default:return new o.Z({code:o.G.ERROR,error:new n.ZP(n.jK.UNHANDLED_RESPONSE,{axiosResponse:a},a)})}}}}}]);
//# sourceMappingURL=767.0459fbb2cb0631b13b93.bundle.js.map