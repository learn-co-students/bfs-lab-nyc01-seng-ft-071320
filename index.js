function findAdjacent(vertex, vertices, edges) {
    let adjacentEdges = []
    let adjacentVertices = []
    edges.forEach(e => {
        if (e.includes(vertex)) {{
            adjacentEdges.push(e)
        }}
    })
    adjacentEdges.forEach(e => {
        e.forEach(v => {
            if (v != vertex) {
                adjacentVertices.push(v)
            }
        })
    })
    let adjacentNodes = vertices.filter(v => {
        return adjacentVertices.includes(v.name) && v.distance === null
    })
    return adjacentNodes
}

function markDistanceAndPredecessor(rootNode, adjacentNodes) {
    adjacentNodes.forEach(n => {
        n.predecessor = rootNode
        n.distance = rootNode.distance+1
    })
}

function bfs(rootNode, vertices, edges){
    let adjacentNodes = findAdjacent(rootNode, vertices, edges)
    markDistanceAndPredecessor(rootNode, adjacentNodes)
    if (adjacentNodes.length > 0) {
        adjacentNodes.forEach(n => {
            bfs(n, vertices, edges)
        })
    } else {
        return vertices.sort((a, b) => {
            return b.distance - a.distance
        })
    }
}
