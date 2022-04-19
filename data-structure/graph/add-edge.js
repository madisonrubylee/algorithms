class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = []
            return true
        }
        return false
    }

    addEdge(vertex1, vertex2) {
        // If I try to add an edge between one and three, that's not going to 
        // work because we don't have a vertex with the value of three.
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2)
            this.adjacencyList[vertex2].push(vertex1)
            return true
        }
        return false
    }
}

let myGraph = new Graph()

myGraph.addVertex(1)
myGraph.addVertex(2)
myGraph.addEdge("1", "2")
myGraph