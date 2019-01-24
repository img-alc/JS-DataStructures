class Graph {
    constructor() {
        this.numberOfVertices = 0;
        this.adjacentList = new Map();
    }

    addVertice(vertice) {
        if(this.adjacentList.has(vertice)) {
            throw `Vertice already added to graph`;
        }
        this.adjacentList.set(vertice, []);
        this.numberOfVertices++;
    }

    addEdge(vertice1, vertice2) {
        if(this.adjacentList.has(vertice1) || this.adjacentList.has(vertice2)) {
            if(this.adjacentList.get(vertice1).includes(vertice2)) {
                throw `Edge already added to Graph`;
            }
            this.adjacentList.get(vertice1).push(vertice2);
            this.adjacentList.get(vertice2).push(vertice1);
        } else {
            throw `One or both vertices were not added to Graph`;
        }        
    }

    checkIfGraphHasVertice(vertice) {
        return this.adjacentList.has(vertice);
    }

    checkIfGraphHasEdge(vertice1, vertice2) {
        if(this.adjacentList.has(vertice1)) {
            return this.adjacentList.get(vertice1).includes(vertice2);
        } else {
            return false;
        }
    }
}