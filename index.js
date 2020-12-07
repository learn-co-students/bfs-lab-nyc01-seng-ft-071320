function bfs(rootNode, vertices, edges){
    rootNode.distance = 0
    let found = [rootNode]
    let foundOrder = [rootNode]
    while(found.length != 0) {
        let current = found.shift()
        let adjecent = findAdjacent(current.name, vertices, edges)
        foundOrder = foundOrder.concat(adjecent)
        markDistanceAndPredecessor(current, adjecent)
        found = found.concat(adjecent)
    }
    return foundOrder
}

function findAdjacent(nodeName,  vertices, edges){
    return edges.filter(function(edge){
      return edge.includes(nodeName)
    }).map(function(edge){
      return edge.filter(function(node){
        return (node != nodeName)
      })[0]
    }).map(function(name){
      return findNode(name, vertices)
    }).filter(function(node){
      return node.distance == null;
    })
  }
  
  function markDistanceAndPredecessor(predecessor, adjacentNodes){
    adjacentNodes.map(function(node){
      node.distance = predecessor.distance + 1;
      node.predecessor = predecessor;
    })
  }
  
  
  
  function findNode(nodeName, vertices){
    return vertices.find(function(vertex){
      return vertex.name == nodeName
    })
  }
