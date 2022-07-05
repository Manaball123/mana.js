

function CopyObj(object)
{
    return JSON.parse(JSON.stringify(object))
}
function SaveFromPath(fname, path, objectName, object)
{
    var key = objectName;
    var len = path.length;
   //Cheat.Print("\n Processing path " + path.toString())
    for(var i = 0; i < len; i++)
    {
        
        if(typeof(path[i]) == "string")
        {
            key = key + "/" + path[i];
        }
        else
        {
            key = key + "_" + path[i].toString();
        }
        //Cheat.Print("Key is currently " + key.toString())
        

    }
    //Cheat.Print("\n Saving " + JSON.stringify(object) + " @ key " + key)
    DataFile.SetKey(fname, key, JSON.stringify(object))
}
function LoadFromPath(fname, path, objectName, root_object)
{
    var key = objectName;
    var len = path.length;
    for(var i = 0; i < len; i++)
    {
        if(typeof(path[i]) == "string")
        {
            key = key + "/" + path[i];
        }
        else
        {
            key = key + "_" + path[i].toString();
        }

    }
    var obj = root_object;
    for(var i = 0; i < (len - 1); i++)
    {
        obj = obj[path[i]]
    }
    //obj should still be mutuable at this point

    //Cheat.Print("\n Loading " + DataFile.GetKey(fname, key) + " @ key " + key)
    obj[path[len - 1]] = JSON.parse(DataFile.GetKey(fname, key))
}

function NavigateDataFile(fname, root_object, object, path, objectName, type)
{
    //Cheat.Print("\n path is currently: " + path.toString())
    //If its an array
    if(Array.isArray(object))
    {
        var len = object.length;
        for(var i = 0; i < len; i++)
        {
            var newPath = CopyObj(path);
            newPath.push(i)
            //Cheat.Print("\nLoading path " + newPath.toString())
            NavigateDataFile(fname, root_object, object[i], newPath, objectName, type);
        }
    }
    //If its not an array
    else
    {
        //It could be an object
        if(typeof(object) === "object" && object != null)
        {
            Object.keys(object).forEach(function(key)
            {
                var newPath = CopyObj(path);
                newPath.push(key)
                //Cheat.Print("\nLoading path " + newPath.toString())
                NavigateDataFile(fname, root_object, object[key], newPath, objectName, type);
                
            })
        }
        //If not array or object 
        else{
            //If saving
            if(type == 0)
            {
                SaveFromPath(fname, path, objectName, object)
            }
            //If loading
            else
            {
                LoadFromPath(fname, path, objectName, root_object)
                //Cheat.Print("\nLoading object from path " + path.toString())
            }
        }
    }
}


//Saves the object into the datafile cache
//Note that this function is recursive
//Enter object name in path
DataFile.SaveObject = function(filename, object, objectName)
{
    var path = []

    NavigateDataFile(filename, object, object, path, objectName, 0)

}

DataFile.LoadObject = function(filename, object, objectName)
{
    var path = []

    NavigateDataFile(filename, object, object, path, objectName, 1)

}
//Prints a nested object recursively
function RecPrint(object)
{
    //If its an array
    if(Array.isArray(object))
    {
        var len = object.length;
        Cheat.Print("[ ");
        for(var i = 0; i < len; i++)
        {
            RecPrint(object[i])
            Cheat.Print(", ")
        }
        Cheat.Print(" ]");
    }
    //If its not an array
    else
    {
        //It could be an object
        if(typeof(object) === "object" && object != null)
        {
            Cheat.Print("{ ")
            Object.keys(object).forEach(function(key)
            {
                Cheat.Print( key + " : ");
                RecPrint(object[key])
                Cheat.Print(", ")
            })
            Cheat.Print(" }")
        }
        //If not array or object 
        else{
            //Print directly
            Cheat.Print(object.toString());
        }
    }
}


obj1 = {
    "e1" : "lsdfghergh",
    "efg" : 6222,
    "a" : [3434,52313,
    {
        "1" : [123, 246,
        {
            "boob" : "dood"
        }]
    }]
}

Cheat.Print("obj before load: \n")
RecPrint(obj1)
Cheat.Print("\n")
DataFile.Load("test1")
//DataFile.SaveObject("test1", obj1, "obj1")
DataFile.LoadObject("test1", obj1, "obj1")
//DataFile.Save("test1")
Cheat.Print("obj after load: \n")
RecPrint(obj1)
