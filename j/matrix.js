class Graph {
    constructor(numVertices) {
      this.numVertices = numVertices;
      this.adjMatrix = [];
      
      for (let i = 0; i < numVertices; i++) {
        this.adjMatrix[i] = [];
        for (let j = 0; j < numVertices; j++) {
          this.adjMatrix[i][j] = 0;
        }
      }
    }
    
    addEdge(source, destination) {
      
      this.adjMatrix[source][destination] = 1;
      this.adjMatrix[destination][source] = 1;
    }
    
    printGraph() {

      for (let i = 0; i < this.numVertices; i++) {
        let row = "";
        for (let j = 0; j < this.numVertices; j++) {
          row += this.adjMatrix[i][j] + " ";
        }
        console.log(row);
      }
    }
  }
  
  
  const graph = new Graph(4);
  graph.addEdge(0, 1);
  graph.addEdge(0, 2);
  graph.addEdge(1, 3);
  graph.addEdge(2, 3);
  
  graph.printGraph();
  