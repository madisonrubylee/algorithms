let arr = [10,11,12,13,14,15,16,17,18,19]

function makeMaxHeap(arr) {
    let maxHeap = []
    let length = arr.length 
    for(let i=0; i<length; i++) {
        maxHeap.push(arr[i])
        let newNodeIndex = maxHeap.length - 1
        while(newNodeIndex>0) {
            if(maxHeap[Math.floor(newNodeIndex-1)/2]<maxHeap[newNodeIndex]) {
                let tmp = maxHeap[newNodeIndex]
                maxHeap[newNodeIndex] = maxHeap[Math.floor((newNodeIndex-1)/2)]
                maxHeap[Math.floor((newNodeIndex-1/2))] = tmp
                newNodeIndex = Math.floor((newNodeIndex-1)/2)
            } else {
                break
            }
        }
    }
    return maxHeap  
}