// representation of graph
// 1->2,3,4
// 2->4,2,5

const graph = {};
graph[1] = [2, 3, 4];
graph[2] = [4, 2, 5];


for(const node in graph){
    console.log(node , '->',graph[node]);
}

// output
// 1 -> [ 2, 3, 4 ]
// 2 -> [ 4, 2, 5 ]
