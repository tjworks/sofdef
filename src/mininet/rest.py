"""
"""
from mininet.log import info, error, debug
from mininet.util import makeIntfPair, quietRun
from mininet.net import Mininet
import re
from mininet.topo import SingleSwitchTopo
from bottle import route, run, template,request
import json, threading

class RestfulService( threading.Thread ):

    "RESTful service for mininet api"
    def __init__( self, net, httpport=8080):
        """name: interface name (e.g. h1-eth0)
           node: owning node (where this intf most likely lives)
           link: parent link if we're part of a link
           other arguments are passed to config()"""
        threading.Thread.__init__(self)
        self.port=httpport
        RestfulService.network = net
        self.daemon = True
    
    def run( self ):
        print "*** Starting RESTful service at port %d" %self.port
        run(host='0.0.0.0', port=self.port)
     
    """
    def stop(self):
        print "Stopping RESTful service"
        self.status = 'stopped'
    """
    def __repr__( self ):
        return '<%s %s>' % ( self.__class__.__name__, self.port )

    def __str__( self ):
        return self.name 
    
@route('/apiv1/network/meta')
@route('/net')
def networkMeta():
    print "Handling /network/meta"
    response = {"id":"mininet-329", "type":"mininet", "api-host":"", "api-prefix":"apiv1"}

    return doResponse(request, response)
@route('/apiv1/network/all')
def networkAll():
    print "Handling /network/all"
    return doResponse( request, getNetwork())

@route('/apiv1/network/node')
def networkNodeAll():
    print "Handling all ndoes"
    mynet = getNetwork()
    return doResponse(request, mynet['nodes'])

@route('/apiv1/network/link')
def networkLinkAll():
    print "Handling all links"
    mynet = getNetwork()
    return doResponse(request, mynet['links'])
   

@route('/apiv1/network/switch')
def networkSwitchAll():
    print "Handling all switches"
    mynet = getNetwork()
    switches = [sw for sw in mynet['nodes'] if sw['group'] == 'switch' ]
    return doResponse(request, switches)

@route('/apiv1/network/host')
def networkHostAll():
    print "Handling all hosts"
    mynet = getNetwork()
    hosts = [sw for sw in mynet['nodes'] if sw['group'] != 'switch' ]
    return doResponse(request, hosts)
   

@route('/apiv1/network/node/<nodeId>')
def networkNode(nodeId):
    print "Handling node %s" %nodeId
    node = RestfulService.network.get(nodeId)
    d = node2dict(node);
    return doResponse(request, d)
   
   
   
@route('/stop')
def stop():
    #net.stop()
    print "stopping mininet by REST"
    RestfulService.network.stop()

def doResponse(request, response):
    # handle the JSONP 
    responseJson = json.dumps(response, indent=2);
    jsonpCallback = request.query.callback
    if(jsonpCallback):
        return  "%s(%s)" %(jsonpCallback, responseJson)
    else:
        return responseJson
    
    
def getNetwork():
    net = RestfulService.network
    dnet = { 'nodes':[], 'links':[], 'source':'mininet'}
    
    rawlinks = {}
    for n in net.topo.nodes():
        node = net.get(n)
        obj = node2dict(node) 
        """
        if(net.topo.isSwitch(n)):
            obj['id'] = node.dpid
            obj['group'] = 'switch'
        else:
            obj['id'] = node.name
            obj['group'] = 'host' 
         
         
        intfs = [] 
        obj['interfaces'] = intfs
        
        """
        dnet['nodes'].append(obj)  
        for i in node.intfs:
            intf = node.intfs[i]
            """ 
            iobj = {}
            if(intf.name == 'lo'):
                continue
            iobj['name'] = intf.name
            iobj['id'] =  intf.name
            iobj['ip'] = intf.ip
            iobj['mac'] = intf.mac
            iobj['prefix'] = intf.prefixLen
            intfs.append(iobj)
            """
            # link
            if(intf.link):
                key = intf.link.intf1.name + intf.link.intf2.name if intf.link.intf1.name < intf.link.intf2.name else intf.link.intf2.name + intf.link.intf1.name
                rawlinks[key] = intf.link
                #net.get('s1').intfs[1].link.intf2

    #print rawlinks
    for (key, link) in rawlinks.iteritems():
        obj = {}
        obj['id'] = key
        obj['name'] = key
        obj['intf1'] = link.intf1.name
        obj['intf2'] = link.intf2.name
        obj['node1'] = link.intf1.node.name
        obj['node2'] = link.intf2.node.name
        dnet['links'].append(  obj )


    return dnet #


def node2dict(node):
    net = RestfulService.network

    obj = {}
    if(net.topo.isSwitch(node.name)):
        obj['id'] = node.dpid
        obj['group'] = 'switch'
    else:
        obj['id'] = node.name
        obj['group'] = 'host' 
     
    intfs = [] 
    obj['interfaces'] = intfs 
      
    for i in node.intfs:
        intf = node.intfs[i] 
        iobj = {}
        if(intf.name == 'lo'):
            continue
        iobj['name'] = intf.name
        iobj['id'] =  intf.name
        iobj['ip'] = intf.ip
        iobj['mac'] = intf.mac
        iobj['prefix'] = intf.prefixLen
        intfs.append(iobj)
    return obj