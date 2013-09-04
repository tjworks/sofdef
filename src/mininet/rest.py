#!/usr/bin/python

from mininet.net import Mininet
from mininet.topo import SingleSwitchTopo

from bottle import route, run, template,request
import json,traceback

net = Mininet( topo=SingleSwitchTopo( 2 ) )


def defaultJson(obj):
    return ''

@route('/net')
def network():
    jsonpCallback = request.query.callback
    if(jsonpCallback):
        return  "%s(%s)" %(jsonpCallback, net2json(net) )
    else:
        return net2json(net)

@route('/net/switches')
def switches(): 
    print net.switches
    out = json.dumps(net.switches, skipkeys=True)
    print '/net/switches\n----\n%s' %out
    return out 

@route('/cmd/<node>/<cmd>')
def cmd( node='h1', cmd='hostname' ):
    out, err, code = net.get( node ).pexec( cmd )
    return out + err

@route('/stop')
def stop():
    net.stop()


def net2json(net):
    dnet = { 'nodes':[], 'links':[]}
    
    rawlinks = {}
    for n in net.topo.nodes():
        node = net.get(n)
        obj = {}
        if(net.topo.isSwitch(n)):
            obj['id'] = node.dpid
            obj['group'] = 'switch'
        else:
            obj['id'] = node.name
            obj['group'] = 'host'
        
        dnet['nodes'].append(obj)
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
         
            
    return json.dumps(dnet, indent=2);

try:
    print "Running mininet: %s" % net2json(net)
except:
    print traceback.format_exc();
    
    

run(host='0.0.0.0', port=8080 )