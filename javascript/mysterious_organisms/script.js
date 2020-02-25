// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory=(number,array)=>{
  return {
    specimenNum: number,
    dna: array,

    //changes one base out of 15
    mutate: function(){
      let base = returnRandBase();
      randIndex = Math.floor(Math.random()*array.length);
      if (array[randIndex]!==base){
        array[randIndex]=base
      }
      return array
    },

    // compares DNA sequence
    compareDNA: function(otherorg){
      let count = 0;
      for (let i=0;i<this.dna.length;i++){
        // remember to put .dna because you're accessing the dna array
        if (this.dna[i]===otherorg.dna[i]){
          count++
        }};
      const percentage = count*100/this.dna.length;
      return `specimen #1 and specimen #2 have ${percentage}% DNA in common.`
      },

    //those with at least 60% C/G will survive
    willLikelySurvive: function(){
      count = 0;
      for (let i=0;i<this.dna.length;i++){
        if (this.dna[i]==="C" || this.dna[i]==="G"){count++};
        if (count/this.dna.length>=0.6){
          return true
        }
        else {return false}
      }
    }
    }
  }

// to check
const org1 = pAequorFactory(1,mockUpStrand());
const org2 = pAequorFactory(2,mockUpStrand());

// comparison check
console.log(org1.compareDNA(org2))

//will likely survive check
console.log(org1)
console.log(org1.willLikelySurvive())
