
function SaveFromPath(fname, path, object)
{
    var key = "";
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
    DataFile.SetKey(fname, key, object)
}
function LoadFromPath(fname, path, root_object)
{
    var key = "";
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
    Cheat.Print("Current obj: " + obj.toString())
    obj[path[len - 1]] = DataFile.GetKey(fname, key)
}

function NavigateDataFile(fname, root_object, object, path, type)
{
    var curPath = path;
    //If its an array
    if(Array.isArray(object))
    {
        var len = object.length;
        for(var i = 0; i < len; i++)
        {
            NavigateDataFile(fname, object[i], curPath.concat(i), type);
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
                NavigateDataFile(fname, object[key], curPath.concat(key), type);
            })
        }
        //If not array or object 
        else{
            //If saving
            if(type == 0)
            {
                SaveFromPath(fname, path, object)
            }
            //If loading
            else
            {
                LoadFromPath(fname, path, root_object)
                Cheat.Print("Loading path " + path.toString())
            }
        }
    }
}


//Saves the object into the datafile cache
//Note that this function is recursive
//Enter object name in path
DataFile.SaveObject = function(filename, object, path)
{
    var cpath = path;
    if(path == undefined)
    {
        cpath = "/"
    }
    NavigateDataFile(filename, object, object, cpath, 0)

}

DataFile.LoadObject = function(filename, object, path)
{
    var cpath = [path];
    if(path == undefined)
    {
        cpath = ["/"]
    }
    NavigateDataFile(filename, object, object, cpath, 1)

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
    "e1" : "qwerrt",
    "efg" : 0,
    "a" : [3,4,
    {
        "1" : [2, 1,
        {
            "boob" : "dddd"
        }]
    }]
}


//RecPrint(obj1)
DataFile.Load("test1")
DataFile.LoadObject("test1", obj1, "obj1")
//DataFile.Save("test1")
//RecPrint(obj1)

function draw()
{

}