class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.02            
        }
       
        this.chain = Constraint.create(options);
        World.add(myWorld, this.chain);
    }


}