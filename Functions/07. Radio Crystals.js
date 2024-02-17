function solve(arr) {
    
    let desiredThickness = arr[0];

    let operations = {
        
        cut: function (crystal,resulthickness) {
        let counter = 0 
        if((crystal / 4) < resulthickness){
           return crystal;
       }
            while ((crystal / 4) >= resulthickness) {
                 if(crystal == resulthickness){
                      counter++
                     console.log(`Cut x${counter}`)
         return operations.TransportingWashing(crystal);;
    }
                crystal = crystal / 4;
                counter++
            }
            if(counter > 0){
                 console.log(`Cut x${counter}`)
            }
    
            return operations.TransportingWashing(crystal);
        },
        lap: function (crystal, resulthickness) {
            let counter = 0
             if((crystal - (crystal * 0.2)) < resulthickness){
           return crystal;
       }
            while ((crystal - (crystal * 0.2)) >= resulthickness) {
                crystal = crystal - (crystal * 0.2);
                counter++
                
            }
              if(counter > 0){
                 console.log(`Lap x${counter}`)
            }
            return operations.TransportingWashing(crystal);
        },
        grind: function (crystal, resulthickness) {
            let counter = 0
              if((crystal - 20) < resulthickness){
           return crystal;
       }
             while ((crystal - 20) >= resulthickness) {
                crystal = crystal - 20;
                counter++
            }
             if(counter > 0){
                 console.log(`Grind x${counter}`)
            }
             return operations.TransportingWashing(crystal);
        },
        etch: function (crystal,resulthickness) {
            let counter = 0
                    if((crystal) <= (resulthickness - 1)){
           return crystal;
       }
                  while ((crystal - 2) >= (resulthickness - 1)) {
                      if((crystal - 2)  == resulthickness){
                        crystal = crystal - 2
                        counter++
                          break;
                      };
                      counter++
        crystal = crystal - 2;
    }
     if(counter > 0){
                 console.log(`Etch x${counter}`)
            }
           
    return operations.TransportingWashing(crystal);
},
        xRay: function (crystal) {
         console.log(`X-ray x1`)
           return crystal = crystal + 1
        },
        TransportingWashing: function (crystal, resulthickness) {
            console.log("Transporting and washing")
            return Math.floor(crystal);
        }
    };

    for (let index = 1; index < arr.length; index++) {
        let currentCrystal = arr[index];
        
        console.log(`Processing chunk ${currentCrystal} microns`);
        
        currentCrystal = operations.cut(currentCrystal,desiredThickness);
        
        if(currentCrystal == desiredThickness){
             console.log(`Finished crystal ${currentCrystal} microns`);
            continue;
        }
        currentCrystal = operations.lap(currentCrystal, desiredThickness);
    
          if(currentCrystal == desiredThickness){
             console.log(`Finished crystal ${currentCrystal} microns`);
            continue;
        }

        currentCrystal = operations.grind(currentCrystal, desiredThickness);
       
          if(currentCrystal == desiredThickness){
             console.log(`Finished crystal ${currentCrystal} microns`);
            continue;
        }

        currentCrystal = operations.etch(currentCrystal, desiredThickness);
        
         if(currentCrystal == desiredThickness){
             console.log(`Finished crystal ${currentCrystal} microns`);
            continue;
        }
        
         if(currentCrystal < desiredThickness){
             currentCrystal = operations.xRay(currentCrystal);
        }
         if (currentCrystal == desiredThickness) {
                console.log(`Finished crystal ${currentCrystal} microns`);
              
            }
        
    }
    
}
solve([1232,5000,3400]);
