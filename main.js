Webcam.set({
    width: 310,
    height: 300,
image_format: 'jpeg',
jpeg_quality: 90,

constraints:{ facingMode: "environment"}
})

camera = document.getElementById("camera")
Webcam.attach('#camera')

function takePhoto()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML = "<img id='resulted-photo' src='"+ data_uri +"'>"
    })
    
}

console.log("ml5 version-", ml5.version)
classifier = ml5.imageClassifier("MobileNet", modelLOADED)

function modelLOADED()
{
    console.log("model not stuffed, it started working")
}

function findPhoto()
{
    img = document.getElementById("resulted-photo")
    classifier.classify(img, getResult)
}

function getResult(error, results)
{
    if (error){
        console.log(error)
    }
    else{
        console.log(results)
        intheend = results[0].label
        andalso = results[0].confidence*100
        document.getElementById("text-result").innerHTML = intheend + ", the model is " + andalso.toFixed(2) + "% sure about it"
    }
}