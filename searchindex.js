Search.setIndex({docnames:["index","modules","oef","user/communication-protocols","user/defining-data-model","user/install","user/introduction","user/oef-node","user/query-language","user/quickstart","user/resources-links","user/tutorial"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.todo":1,sphinx:55},filenames:["index.rst","modules.rst","oef.rst","user/communication-protocols.rst","user/defining-data-model.rst","user/install.rst","user/introduction.rst","user/oef-node.rst","user/query-language.rst","user/quickstart.rst","user/resources-links.rst","user/tutorial.rst"],objects:{"":{oef:[2,0,0,"-"]},"oef.agents":{Agent:[2,1,1,""],LocalAgent:[2,1,1,""],OEFAgent:[2,1,1,""]},"oef.agents.Agent":{async_connect:[2,2,1,""],async_disconnect:[2,2,1,""],async_run:[2,2,1,""],connect:[2,2,1,""],disconnect:[2,2,1,""],on_accept:[2,2,1,""],on_cfp:[2,2,1,""],on_decline:[2,2,1,""],on_dialogue_error:[2,2,1,""],on_message:[2,2,1,""],on_oef_error:[2,2,1,""],on_propose:[2,2,1,""],on_search_result:[2,2,1,""],public_key:[2,3,1,""],register_agent:[2,2,1,""],register_service:[2,2,1,""],run:[2,2,1,""],search_agents:[2,2,1,""],search_services:[2,2,1,""],send_accept:[2,2,1,""],send_cfp:[2,2,1,""],send_decline:[2,2,1,""],send_message:[2,2,1,""],send_propose:[2,2,1,""],stop:[2,2,1,""],unregister_agent:[2,2,1,""],unregister_service:[2,2,1,""]},"oef.core":{AgentInterface:[2,1,1,""],ConnectionInterface:[2,1,1,""],DialogueInterface:[2,1,1,""],OEFCoreInterface:[2,1,1,""],OEFProxy:[2,1,1,""]},"oef.core.ConnectionInterface":{on_dialogue_error:[2,2,1,""],on_oef_error:[2,2,1,""],on_search_result:[2,2,1,""]},"oef.core.DialogueInterface":{on_accept:[2,2,1,""],on_cfp:[2,2,1,""],on_decline:[2,2,1,""],on_message:[2,2,1,""],on_propose:[2,2,1,""]},"oef.core.OEFCoreInterface":{connect:[2,2,1,""],register_agent:[2,2,1,""],register_service:[2,2,1,""],search_agents:[2,2,1,""],search_services:[2,2,1,""],send_accept:[2,2,1,""],send_cfp:[2,2,1,""],send_decline:[2,2,1,""],send_message:[2,2,1,""],send_propose:[2,2,1,""],stop:[2,2,1,""],unregister_agent:[2,2,1,""],unregister_service:[2,2,1,""]},"oef.core.OEFProxy":{is_connected:[2,2,1,""],loop:[2,2,1,""],public_key:[2,3,1,""]},"oef.dialogue":{DialogueAgent:[2,1,1,""],GroupDialogues:[2,1,1,""],SingleDialogue:[2,1,1,""]},"oef.dialogue.DialogueAgent":{on_accept:[2,2,1,""],on_cfp:[2,2,1,""],on_connection_error:[2,2,1,""],on_decline:[2,2,1,""],on_message:[2,2,1,""],on_new_cfp:[2,2,1,""],on_new_message:[2,2,1,""],on_propose:[2,2,1,""],register_dialogue:[2,2,1,""],unregister_dialogue:[2,2,1,""]},"oef.dialogue.GroupDialogues":{add_agents:[2,2,1,""],better:[2,2,1,""],finished:[2,2,1,""],update:[2,2,1,""]},"oef.dialogue.SingleDialogue":{key:[2,3,1,""],on_accept:[2,2,1,""],on_cfp:[2,2,1,""],on_decline:[2,2,1,""],on_dialogue_error:[2,2,1,""],on_message:[2,2,1,""],on_propose:[2,2,1,""],send_accept:[2,2,1,""],send_cfp:[2,2,1,""],send_decline:[2,2,1,""],send_message:[2,2,1,""],send_propose:[2,2,1,""]},"oef.helpers":{haversine:[2,4,1,""]},"oef.logger":{set_logger:[2,4,1,""]},"oef.messages":{Accept:[2,1,1,""],AgentMessage:[2,1,1,""],BaseMessage:[2,1,1,""],CFP:[2,1,1,""],Decline:[2,1,1,""],Message:[2,1,1,""],OEFErrorOperation:[2,1,1,""],Propose:[2,1,1,""],RegisterDescription:[2,1,1,""],RegisterService:[2,1,1,""],SearchAgents:[2,1,1,""],SearchServices:[2,1,1,""],UnregisterDescription:[2,1,1,""],UnregisterService:[2,1,1,""]},"oef.messages.Accept":{to_envelope:[2,2,1,""]},"oef.messages.BaseMessage":{to_envelope:[2,2,1,""]},"oef.messages.CFP":{to_envelope:[2,2,1,""]},"oef.messages.Decline":{to_envelope:[2,2,1,""]},"oef.messages.Message":{to_envelope:[2,2,1,""]},"oef.messages.OEFErrorOperation":{REGISTER_DESCRIPTION:[2,3,1,""],REGISTER_SERVICE:[2,3,1,""],UNREGISTER_DESCRIPTION:[2,3,1,""],UNREGISTER_SERVICE:[2,3,1,""]},"oef.messages.Propose":{to_envelope:[2,2,1,""]},"oef.messages.RegisterDescription":{to_envelope:[2,2,1,""]},"oef.messages.RegisterService":{to_envelope:[2,2,1,""]},"oef.messages.SearchAgents":{to_envelope:[2,2,1,""]},"oef.messages.SearchServices":{to_envelope:[2,2,1,""]},"oef.messages.UnregisterDescription":{to_envelope:[2,2,1,""]},"oef.messages.UnregisterService":{to_envelope:[2,2,1,""]},"oef.proxy":{OEFConnectionError:[2,5,1,""],OEFLocalProxy:[2,1,1,""],OEFNetworkProxy:[2,1,1,""]},"oef.proxy.OEFLocalProxy":{LocalNode:[2,1,1,""],connect:[2,2,1,""],is_connected:[2,2,1,""],register_agent:[2,2,1,""],register_service:[2,2,1,""],search_agents:[2,2,1,""],search_services:[2,2,1,""],send_accept:[2,2,1,""],send_cfp:[2,2,1,""],send_decline:[2,2,1,""],send_message:[2,2,1,""],send_propose:[2,2,1,""],stop:[2,2,1,""],unregister_agent:[2,2,1,""],unregister_service:[2,2,1,""]},"oef.proxy.OEFLocalProxy.LocalNode":{connect:[2,2,1,""],register_agent:[2,2,1,""],register_service:[2,2,1,""],run:[2,2,1,""],search_agents:[2,2,1,""],search_services:[2,2,1,""],stop:[2,2,1,""],unregister_agent:[2,2,1,""],unregister_service:[2,2,1,""]},"oef.proxy.OEFNetworkProxy":{connect:[2,2,1,""],is_connected:[2,2,1,""],register_agent:[2,2,1,""],register_service:[2,2,1,""],search_agents:[2,2,1,""],search_services:[2,2,1,""],send_accept:[2,2,1,""],send_cfp:[2,2,1,""],send_decline:[2,2,1,""],send_message:[2,2,1,""],send_propose:[2,2,1,""],stop:[2,2,1,""],unregister_agent:[2,2,1,""],unregister_service:[2,2,1,""]},"oef.query":{And:[2,1,1,""],Constraint:[2,1,1,""],ConstraintExpr:[2,1,1,""],ConstraintType:[2,1,1,""],Distance:[2,1,1,""],Eq:[2,1,1,""],Gt:[2,1,1,""],GtEq:[2,1,1,""],In:[2,1,1,""],Lt:[2,1,1,""],LtEq:[2,1,1,""],Not:[2,1,1,""],NotEq:[2,1,1,""],NotIn:[2,1,1,""],Or:[2,1,1,""],OrderingRelation:[2,1,1,""],Query:[2,1,1,""],Range:[2,1,1,""],Relation:[2,1,1,""],Set:[2,1,1,""]},"oef.query.And":{check:[2,2,1,""],from_pb:[2,6,1,""],is_valid:[2,2,1,""],to_pb:[2,2,1,""]},"oef.query.Constraint":{check:[2,2,1,""],from_pb:[2,6,1,""],is_valid:[2,2,1,""],to_pb:[2,2,1,""]},"oef.query.ConstraintExpr":{check:[2,2,1,""],is_valid:[2,2,1,""]},"oef.query.ConstraintType":{check:[2,2,1,""],is_valid:[2,2,1,""]},"oef.query.Distance":{check:[2,2,1,""],from_pb:[2,6,1,""],to_pb:[2,2,1,""]},"oef.query.Eq":{check:[2,2,1,""]},"oef.query.Gt":{check:[2,2,1,""]},"oef.query.GtEq":{check:[2,2,1,""]},"oef.query.In":{check:[2,2,1,""]},"oef.query.Lt":{check:[2,2,1,""]},"oef.query.LtEq":{check:[2,2,1,""]},"oef.query.Not":{check:[2,2,1,""],from_pb:[2,6,1,""],is_valid:[2,2,1,""],to_pb:[2,2,1,""]},"oef.query.NotEq":{check:[2,2,1,""]},"oef.query.NotIn":{check:[2,2,1,""]},"oef.query.Or":{check:[2,2,1,""],from_pb:[2,6,1,""],is_valid:[2,2,1,""],to_pb:[2,2,1,""]},"oef.query.Query":{check:[2,2,1,""],from_pb:[2,6,1,""],is_valid:[2,2,1,""],to_pb:[2,2,1,""]},"oef.query.Range":{check:[2,2,1,""],from_pb:[2,6,1,""],to_pb:[2,2,1,""]},"oef.query.Relation":{from_pb:[2,6,1,""],to_pb:[2,2,1,""]},"oef.query.Set":{from_pb:[2,6,1,""],to_pb:[2,2,1,""]},"oef.schema":{AttributeInconsistencyException:[2,5,1,""],AttributeSchema:[2,1,1,""],DataModel:[2,1,1,""],Description:[2,1,1,""],Location:[2,1,1,""],ProtobufSerializable:[2,1,1,""],generate_schema:[2,4,1,""]},"oef.schema.AttributeSchema":{from_pb:[2,6,1,""],to_pb:[2,2,1,""]},"oef.schema.DataModel":{from_pb:[2,6,1,""],to_pb:[2,2,1,""]},"oef.schema.Description":{from_pb:[2,6,1,""],to_agent_description_pb:[2,2,1,""],to_pb:[2,2,1,""]},"oef.schema.Location":{distance:[2,2,1,""],from_pb:[2,6,1,""],to_pb:[2,2,1,""]},"oef.schema.ProtobufSerializable":{from_pb:[2,6,1,""],to_pb:[2,2,1,""]},oef:{agents:[2,0,0,"-"],core:[2,0,0,"-"],dialogue:[2,0,0,"-"],helpers:[2,0,0,"-"],logger:[2,0,0,"-"],messages:[2,0,0,"-"],proxy:[2,0,0,"-"],query:[2,0,0,"-"],schema:[2,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","function","Python function"],"5":["py","exception","Python exception"],"6":["py","classmethod","Python class method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:function","5":"py:exception","6":"py:classmethod"},terms:{"abstract":[2,4,11],"boolean":[4,8,11],"byte":[2,3,9,11],"case":[2,3,11],"class":[2,3,4,8,9,11],"default":2,"enum":2,"final":[4,6,9,11],"float":[2,3,4,8,11],"function":[2,3],"import":[3,4,8,9,11],"int":[2,3,4,8,9,11],"new":[2,11],"public":[2,3,4,6,8],"return":[2,3,8,11],"short":4,"switch":11,"true":[2,3,4,8,9,11],"try":[3,9,11],"while":7,And:[2,7,11],For:[0,2,3,4,5,6,7,8,9,11],GPS:6,His:11,Not:2,One:3,That:[2,3,4,8,11],The:[0,2,3,4,5,6,9,11],Then:[3,8,11],There:[2,3,6,8],These:6,Use:0,Using:[0,2,5],With:[2,8,9],_1984:[2,4],abc:2,abl:[2,4,11],about:[0,2,3,4,5,8,9,10,11],abov:[3,8],accept:[2,11],access:6,accordingli:11,account:2,achiev:6,across:11,action:11,activ:0,actual:[3,6],add:[2,7],add_ag:2,addit:9,address:[3,11],advanc:6,aea:6,after:[2,3,7,8,11],again:3,agent:[0,1,4,8],agent_descript:[2,3],agent_identifi:3,agent_pb2:2,agentdescript:2,agentdirectori:6,agentinterfac:2,agentmessag:2,air:11,air_pressur:11,air_pressure_attr:11,all:[2,3,4,8,9,11],alloc:[3,11],allow:[0,2,4,6,8,11],along:[6,8],alphanumer:[2,8],alreadi:[2,3,5],also:[5,6,7,9],altern:[3,5,8],alwai:[0,4],ambigu:8,analog:[2,3,11],anglia:3,ani:[2,3,6,8,11],anoth:[0,2,3,9,11],answer:[2,3,9,11],answer_id:[2,3],anymor:[3,11],api:[0,3,6,8],app:7,applic:4,appreci:0,apt:[5,7,9],architectur:6,argument:11,arriv:[2,3],ask:[0,3,8,11],asset:11,assign:4,associ:[2,3,4,8,11],assum:[2,3,4,5,7,8,11],async:11,async_connect:2,async_disconnect:2,async_run:[2,9,11],asynchron:[2,3],asyncio:[2,9],attach:6,attr_author:[2,4],attr_avg_rat:[2,4],attr_bookshop:4,attr_ebook:[2,4],attr_genr:[2,4],attr_isbn:[2,4],attr_titl:[2,4],attr_year:[2,4],attribut:[0,2,8,11],attribute_descript:[2,11],attribute_nam:2,attribute_schema:2,attribute_typ:2,attribute_valu:2,attributeinconsistencyexcept:2,attributeschema:[2,3,4,8,9,11],audit:2,augment:6,author:[2,4,8],automat:[3,11],autonom:6,avail:[2,8,11],averag:[2,4,8],average_r:[2,4,8],avoid:8,awk:[7,9],back:[2,3,11],background:7,badli:11,base:[2,3,6],basemessag:2,basic:6,becaus:[3,4,8],becom:3,been:[2,3,8],befor:[2,3,8,11],begin:11,behalf:6,behavior:11,behaviour:[2,3,9,11],behind:11,belong:[4,8],below:3,besid:3,better:[2,11],between:[2,3,4,6,8,11],bin:5,bit:0,block:11,blog:[0,10],bodi:3,book:[2,4,8],book_1:2,book_2:2,book_model:[2,4,8],bookshop:[3,4,8],bookshop_data_model:3,bookshop_po:4,bool:[2,3,4,8,9,11],both:[3,6,9],bottom:6,brew:[5,9],briefli:3,buffer:[5,7],bug:0,bui:3,build:[0,3,8,9],built:11,burden:3,busi:7,buyer:[2,3],call:[2,3,8,11],callback:[2,11],caller:2,cambridg:3,cambridge_queri:3,campu:3,can:[0,2,3,4,5,6,7,8,9,11],cancel:2,cannot:2,capabl:6,car:3,car_data_model:3,care:3,catalog:3,catalogu:4,categori:3,caus:2,center:[2,8],certain:2,cfp:[2,11],cfp_type:[3,11],chang:[0,2,5],channel:[0,2],check:[0,2,3,5,11],child:2,choos:[5,11],cite:3,citi:3,classmethod:2,claus:11,clean:[3,11],client:9,client_ag:[9,11],clone:[5,7,9],close:[2,8,11],close_to_tour_eiffel:[2,8],cmake:7,code:[2,3,4,11],collabor:6,colosseum:[2,8],com:[5,7,9],combin:8,come:[0,2,10],comfort:8,command:5,common:8,commun:[0,2,6,10,11],compar:2,comparison:8,compat:8,compil:[0,7,9],complet:7,complex:[2,3,8,9,11],compliant:[2,11],compon:4,composit:8,comput:[2,3,11],concept:[6,8],conceptu:6,concern:2,concurr:9,condit:[2,3,8,11],conduct:6,conjunct:[2,8],connect:[0,2,6],connectionerror:2,connectioninterfac:2,consid:[8,11],consist:[3,6,8],consol:11,constitut:[2,4,8,11],constrain:2,constraint:[0,2,3,6,9,11],constraint_pb:2,constraintexpr:[2,8],constrainttyp:2,construct:[0,2],constructor:[2,4,8,11],consum:[6,11],contact:[0,6],contain:[2,3,6,7,11],content:[0,1,3,9,11],continu:[3,4,11],contract:6,convei:2,convers:2,convert:2,cooper:6,copyright:0,core:[0,1,3,7,9],correct:2,correctli:[2,3,6],counter:[3,11],counterpart:[2,3],creat:[2,4,6,11],credit:0,curl:5,current:[2,3,6],data:[0,2,3,6,8],data_model:2,data_model_nam:2,datamodel:[2,3,4,8,9],dataservic:6,datum:2,deal:2,debug:[2,11],decis:2,declin:[2,11],decod:11,def:[3,9,11],defin:[0,2,3,6,8],definit:[2,3,4,11],deliv:2,depend:[2,3,5,7,9],depict:3,deploi:6,describ:[2,3,4,8,11],descript:[0,2,3,6,8,9],description_1:3,description_2:3,design:3,desir:[8,11],destin:[2,3],detail:[3,5,6,7,9,11],determin:[2,11],dev:7,develop:[0,2,3,6,10,11],devic:6,diagram:[3,11],dialogu:[0,1,6],dialogue_id:[2,3,9,11],dialogueag:2,dialogueinterfac:2,dict:2,dictionari:[4,11],differ:[2,3,6,8,11],digit:6,direct:0,directli:[2,6],directori:[2,3],disconnect:[2,6,9,11],discov:[3,4,9,11],discover:[3,11],discoveri:[6,11],disjunct:[2,8],dispatch:[2,11],distanc:2,distance_pb:2,distinguish:2,distribut:5,docker:0,document:[5,11],doe:[2,3,8,9],does_echo:11,doesn:3,domain:[4,8],don:[3,11],done:[3,11],down:2,download:5,dump:11,dure:2,each:[2,4,6,9,11],eager:9,ebook_avail:[2,4,8],echo:0,echo_cli:11,echo_descript:11,echo_featur:11,echo_model:11,echo_queri:11,echo_serv:11,echoclientag:11,echoserviceag:11,econom:0,effect:11,effort:2,eiffel:[2,8],either:[2,3,6,8],element:2,els:[9,11],email:0,empti:[3,8,11],enabl:6,encod:11,encoded_data:11,end:[2,3,6],entir:6,entiti:[3,6],entri:2,enumer:11,envelop:2,equal:[2,8,11],equival:[2,11],error:[0,2],especi:5,establish:2,etc:[3,11],evalu:3,even:[2,3],event:[2,3,11],eventu:[2,3],everi:[0,2,3,4,6,8,11],everyth:2,exampl:[0,2,4,6,8],except:2,exchang:[2,3,6],execut:[2,3,9],exist:[3,6],exit:7,expect:8,explain:[3,4,7],explicitli:[2,3,11],explor:6,express:[0,2,11],extend:[2,3,11],extra:2,extract:11,facilit:3,fail:3,fall:8,fals:[2,3,4,8,11],famou:[2,8],farther:[2,8],favorito:0,featur:[0,11],feedback:0,ferrari:3,ferrari_queri:3,fetch:[0,10],fetchai:[5,7,9],fiction:[2,4,8],field:[2,3,4,11],file:[3,5],find:[2,3,4,6,8,9,11],finish:[2,9],fipa:[2,6],first:[0,2,3,4,6,9],five:2,fix:0,flag:[7,11],flexibl:2,focu:4,follow:[2,3,4,5,7,8,9,11],foo:8,format:[2,5,9,11],former:3,forward:[3,11],found:[2,4,9,11],foundat:3,four:[3,4],fourth:4,framework:0,frequent:0,from:[0,2,3,4,5,6,8,9,11],from_:2,from_pb:2,full:[5,7,9,11],fun:6,func:2,further:[3,11],gather:9,gcc:7,gener:[2,6],generate_schema:2,genr:[2,4,8],georg:[2,4,8],get:[5,6,7,9],get_event_loop:9,git:[5,7,9],github:[5,7,9],give:[8,11],given:[0,2,3,4,8,11],goe:11,good:[3,11],googl:[5,7],greater:[2,8],greatli:0,greet:9,greetings_cli:9,greetings_descript:9,greetings_model:9,greetings_serv:9,greetingsag:9,grep:[7,9],group:[0,2,4,10],groupdialogu:2,gteq:[2,8],guid:[5,7,9,11],had:11,hand:3,handl:[0,2],handler:[2,3],happen:[3,11],hard:11,has:[2,3,4,8,11],have:[2,3,4,5,6,7,8,9,11],haversin:2,hello:[3,9,11],helmor:3,help:0,helper:[0,1],henc:[2,3],here:[0,2,3,10,11],heterogen:3,him:3,himself:3,his:[3,11],hold:2,homebrew:5,horror:[2,4,8],how:[3,4,5,7,8,9,11],howev:[8,11],http:[5,7,9],humid:11,humidity_attr:11,id_:2,idea:11,identifi:[2,3,4,6,11],imag:[0,9],img:[7,9],implement:[0,2,3,4,6,8,9,11],impos:[2,3,8,11],includ:[2,4,8],incom:[2,11],inconsist:2,increment:3,inde:3,index:0,inform:[2,3,6,11],initi:[0,3,6],input:[2,5],insid:3,instal:[0,7],instanc:[2,3,4,5,7,8,11],instanti:[2,4,8,9,11],instead:[2,8,11],instruct:[5,7,9,11],integ:[2,4],intellig:3,intend:11,interact:[0,2,11],interchang:6,interest:[2,3,4,6,8,11],interfac:[2,6],interpret:[2,8],introduct:[0,3],invalid:3,iot:6,is_attribute_requir:[2,11],is_connect:2,is_valid:2,isbn:[2,4],issu:0,its:[2,3,6,8,9],itself:[2,3,6,9,11],jerom:0,jeromemaloberti:0,john:3,json:11,jule:[2,8],jupyt:9,just:[3,4,5,6,11],keep:6,kei:[2,3,4,6,11],kind:[0,3,4,6,8,11],king:[2,4,8],know:[0,10],known:6,languag:[0,3,4,11],lat1:2,lat2:2,later:[5,11],latitud:[2,4],latter:[3,4],launch:11,layer:6,le_jules_verne_restaur:[2,8],learn:6,least:[2,8],ledger:6,len:[9,11],less:[2,8],let:[3,4,6,11],level:[2,4,6],libprotobuf:7,librari:7,lifetim:6,light:2,like:[0,4,8,10,11],limit:8,line:[7,11],link:[0,9,10,11],linux:[7,9],list:[0,2,3,4,6,8,9,10,11],listen:7,littl:[0,4],live:6,load:11,local:[2,5,9],local_nod:2,localag:2,localhost:[3,7],localnod:2,locat:[2,3,4,8],log:[2,11],logger:[0,1],logic:8,lokman:0,lon1:2,lon2:2,longer:2,longitud:[2,4],look:[2,5,6,9,11],loop:[2,3,9],lowest:4,lrahmani:0,lteq:[2,8],luxuri:3,mac:9,machin:[5,6],maco:[5,7],mai:[2,5,8,11],main:[2,3],maintain:0,make:[2,3,7],maloberti:0,manag:[2,5,6,11],mandatori:[3,4],manual:5,manufactur:3,marco:0,marcofavorito:0,market:6,marketplac:6,match:[2,3,8],maximum:8,mayb:4,mean:[3,11],measur:11,mechan:6,meet:2,mention:[3,8],messag:[0,1,6,9],method:[2,3,7,9,11],might:[0,3,4,9,11],minimum:11,miss:[2,5],mkdir:7,model:[0,2,3,6,8],model_nam:2,modul:[0,1,3,4,8],moment:[4,5],more:[0,2,3,6,8,9,10,11],moreov:8,most:[2,3],move:3,msg:[2,11],msg_id:[2,3,9,11],multipl:[3,11],must:[2,3,4,8,11],myagent:3,name:[2,3,4,5,8,11],nearest:8,nearli:6,need:[0,2,3,4,6,7,11],negat:[2,8],negoti:[2,6,11],neither:[2,8],network:[2,6],new_msg_id:3,new_target:3,next:[3,6,8],nicer:2,node:[0,2,6,8],non:[2,3,8],none:[2,3,11],nor:[2,8],note:6,notebook:9,noteq:[2,8],noth:3,notic:[2,3,4,8,11],notifi:11,notin:[2,8],novel:[2,4],now:[4,6,11],number:[4,8],obj:2,object:[2,3,6,8,11],obtain:11,obvious:3,occur:2,oef:[4,8],oef_addr:[2,9,11],oef_port:[2,9,11],oef_proxi:2,oefag:[2,3,9,11],oefconnectionerror:2,oefcor:[2,7],oefcoreinterfac:2,oeferroroper:[2,3],oeflocalproxi:2,oefnetworkproxi:2,oefnod:[2,7,11],oefproxi:2,offer:[2,8],offici:0,omit:4,on_accept:[2,3,11],on_cfp:[2,3,11],on_connection_error:2,on_declin:[2,3],on_dialogue_error:[2,3],on_messag:[2,3,9,11],on_new_cfp:2,on_new_messag:2,on_oef_error:[2,3],on_propos:[2,3,11],on_search_result:[2,3,9,11],onc:[3,4,6,9,11],one:[0,2,3,4,5,6,8,9,11],onli:[3,4,5,6,8,11],onlin:3,open:[0,10],oper:[2,3,5,6,8],oppon:3,option:[2,4,7,8],order:[2,3,5,8,11],orderingrel:2,origin:[2,3,9,11],orwel:[2,4,8],osx:5,other:[0,2,6,8,9,11],otherwis:[2,5],our:[3,4,11],ourselv:2,outcom:8,output:[9,11],over:[2,4,8,11],overrid:3,owner:11,pack:2,packag:[0,1,5],page:[0,5,9,11],pair:[2,4,11],paramet:[2,3,4,8,11],pars:2,part:[5,6],parti:3,particular:[2,3,8,11],pattern:2,pend:11,perform:2,pformat:11,physic:[3,11],pip:5,place:6,platform:[7,9],pleas:[5,7,9,11],plu:3,point:[3,4],port:[2,3,7,11],portal:[0,10],posit:[2,6,8],possibl:[3,4,8,11],post:7,potenti:2,pprint:11,practic:[3,11],prefer:7,preliminari:6,prepar:11,present:2,pressur:11,presum:4,prevent:3,previou:[2,3,6,8,11],previous:[2,11],price1:2,price2:2,price:[2,3,11],price_attr:11,primit:6,print:[2,7,9,11],problem:3,process:2,produc:11,program:2,project:7,promot:6,proper:2,properti:[4,6],propos:[2,6,11],propose_typ:[3,11],proposit:2,proto:3,protobuf:[0,2,7,9],protobufserializ:2,protoc:5,protoc_zip:5,protocol:[0,2,5,6,7,11],provid:[2,3,6,7,11],provis:2,proxi:[0,1],public_kei:[2,9,11],publish:[2,8],pull:0,purchas:3,purpos:[0,4,6],put:8,python3:[5,9],python:[2,5,8,9],qua:3,quantiti:11,queri:[0,1,3,4,6,9],query_inst:2,query_pb2:2,queryabl:2,queue:2,quick:9,quickstart:0,radiu:2,rahmani:0,rais:2,rang:2,range_pb:2,rate:[2,4,8],read:[3,8],readi:3,realli:6,reason:3,receiv:[2,3,6,9,11],recipi:[2,3,6,11],recipientag:3,recommend:[7,8,9],recurs:[5,7,9],redefin:11,refer:[2,3,4,7,11],referenc:2,regist:[2,6,9],register_ag:[2,3],register_descript:2,register_dialogu:2,register_servic:[2,3,9,11],registerdescript:2,registerservic:2,registr:[0,3,6],relat:[2,3],releas:5,relev:11,remov:2,repli:11,repo:9,report:[0,3],repositori:[3,5],repres:[2,6,11],represent:2,request:[0,2,3,11],requir:[2,4,5,11],resourc:[2,3,4,8,11],respect:[2,3,11],respons:6,restaur:[2,8],restrict:[2,3,8,11],result:[2,3,9],right:3,robot:2,rowl:8,run:[0,2,3,5],run_until_complet:9,ruskin:3,sake:11,same:[2,3,4,8,11],satisfi:[2,3,8,11],say_hello:9,scalabl:6,scenario:11,scene:11,schedul:2,schema:[0,1,3,4,8,9,11],scienc:[2,4,8],script:[3,7,9,11],sdk:[2,3,4,5,8,9],search:[0,2,6,9],search_ag:[2,3,11],search_id:[2,3,9,11],search_servic:[2,3,9,11],searchag:2,searchservic:2,second:[0,2,3,4],second_hand:3,section:[3,4,6,8,11],see:[2,3,11],select:11,self:[3,9,11],sell:[4,11],seller:[2,3],semant:11,send:[2,3,9,11],send_:3,send_accept:[2,3,11],send_cfp:[2,3,11],send_declin:[2,3],send_messag:[2,3,9,11],send_propos:[2,3,11],sender:[2,3,6,11],sender_ag:3,sens:[3,4],sent:[2,3,6],sentenc:[4,8],separ:9,sequenc:[2,3,11],serial:2,serv:6,server:[2,9,11],server_ag:[9,11],servic:[0,2,4,6,8,9],service_descript:[2,3],servicedirectori:6,session:6,set:[0,2,3,4,5,6,9],set_logg:[2,11],set_pb:2,setup:[5,9],sever:5,share:4,should:[3,9,11],show:[3,8,11],shown:11,side:[3,6],signup:[0,10],simpl:[2,3,6,11],simpli:8,simplic:[6,11],simplifi:11,simul:3,sinc:[3,11],sine:3,singl:2,singledialogu:2,smart:6,smith:3,snippet:3,softwar:[3,6],sold:[2,4],some:[2,3,4,6,8,9,11],someth:[3,11],soon:[0,3,10],sourc:[0,2,5,6],speak:3,special:2,specif:[2,3,8,11],specifi:[2,3,4,6,8,11],speed:11,spend:6,sql:11,standard:[2,3],start:[2,3,6,7,11],state:2,station:0,step:[3,5,6,7,11],stephen:[2,4,8],stop:[2,7,9,11],store:[2,3,6],str:[2,3,4,8,9,11],straightforward:11,strategi:11,streamhandl:2,string:[2,4],structur:[2,4],stuff:3,subclass:2,subexpress:8,submit:[0,3],submodul:[0,1],successfulli:[2,3],sudo:[5,7,9],suggest:5,summar:11,summari:11,support:[0,3,4,5,6,7,8],suppos:[3,4],sure:[2,7,11],synchron:[2,3],system:[3,5,7],take:[2,3],target:[2,3,11],task:2,tear:2,telegram:[0,10],temperatur:11,temperature_attr:11,termin:[7,9,11],test:2,than:[2,8],thei:[0,2,4,6,8,11],them:[4,8,9,11],themselv:4,thi:[0,2,3,4,5,6,7,8,9,11],think:[2,3,11],third:4,those:4,though:8,thought:3,thread:3,thriller:2,through:[6,11],thu:6,time:3,titl:[2,4,8],to_agent_description_pb:2,to_envelop:2,to_pb:2,tolkien:8,tour:[2,8],tour_eiffel:[2,8],track:6,transact:6,tri:3,trivial:[8,11],troubl:9,trust:6,tupl:2,turn:3,tutori:7,two:[2,3,4,7,8],type:[2,3,4,6,8,9,11],typic:6,ubuntu:[7,9],understand:11,understood:2,union:2,uniqu:[2,3,4,11],univers:3,unpack:2,unregist:[2,6],unregister_ag:[2,3],unregister_descript:2,unregister_dialogu:2,unregister_servic:[2,3],unregisterdescript:2,unregisterservic:2,until:[2,3],unzip:5,updat:2,use:[3,6,7,11],used:[2,3,4,6,8,11],useful:[0,2,10,11],user:9,uses:[2,9],using:[3,4,6,8,11],usr:5,utf:11,util:2,valid:2,valu:[2,3,4,8,11],valueerror:2,veri:11,vern:[2,8],version:[5,9],via:[2,3,6,11],violat:2,wai:[2,3,4,5,8,11],wait:[2,3,6],want:[0,3,4,11],warn:0,weather:0,weather_cli:11,weather_data:11,weather_data_model:11,weather_service_descript:11,weather_st:11,weathercli:11,websit:[0,10],weight:2,welcom:0,well:[6,7,11],what:[0,11],when:[2,3,8,9,11],whenev:[2,8,9,11],where:[2,3,4,6,8,11],wherea:[3,4,11],whether:[2,3,4,8,11],which:[2,3,6,11],whitepap:[0,10],who:[2,11],whom:[2,3],whose:[2,3,8],wikipedia:3,win32:5,wind:11,wind_spe:11,wind_speed_attr:11,window:[5,7],wish:2,within:[2,8],work:[2,3,11],world:6,would:[0,3,4,7,10],write:2,written:[2,8],wrt:[2,8],x86_64:5,year:[2,3,4,8],yield:8,you:[0,2,3,4,5,6,7,8,9,10,11],your:[5,7,9,11],yourself:8,zip:5},titles:["OEF Python SDK","oef","oef package","Communication Protocols","Defining Data Models","Installation","Introduction","Set up an OEF Node","The Query Language","Quickstart","Resources","First OEF Agents"],titleterms:{And:8,Not:8,The:8,Use:5,Using:[3,7,9],accept:3,agent:[2,3,6,9,11],attribut:4,author:0,build:7,cfp:3,check:8,client:11,commun:[3,9],compil:5,connect:[3,9,11],constraint:8,content:2,contribut:0,core:[2,6],cycl:6,data:[4,11],datamodel:11,declin:3,defin:[4,11],descript:[4,11],dialogu:[2,3],disconnect:3,distanc:8,docker:[7,9],echo:11,econom:6,error:3,establish:3,exampl:[3,11],exchang:11,express:8,fetch:6,fipa:3,first:11,framework:6,from:7,gener:3,guid:0,handl:3,handshak:3,helper:2,histori:0,imag:7,indic:0,initi:11,instal:[5,9],interact:[3,6],introduct:6,languag:8,life:6,linux:5,logger:[2,11],mac:5,make:11,messag:[2,3,11],method:8,model:[4,11],modul:2,negoti:3,node:[3,5,7,9,11],oef:[0,1,2,3,5,6,7,9,11],open:6,option:11,other:[3,5],overview:6,packag:2,platform:5,propos:3,protobuf:5,protocol:3,proxi:2,purpos:3,python:[0,6],queri:[2,8,11],quickstart:9,rang:8,regist:[3,11],relat:8,releas:0,resourc:[0,10],result:11,run:[7,9,11],schema:2,sdk:[0,6],search:[3,11],second:11,servic:[3,11],set:[7,8,11],setup:11,sourc:7,start:9,station:11,submodul:2,tabl:0,ubuntu:5,unregist:3,user:0,valid:8,wait:11,weather:11,weatherst:11,what:6,write:9}})