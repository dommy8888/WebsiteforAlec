window.addEventListener('DOMContentLoaded', function () {
    // Create the canvas and engine
    let canvas = document.getElementById("renderCanvas");
    const engine = new BABYLON.Engine(canvas, true);

    // Create the scene
    const scene = new BABYLON.Scene(engine);

    // Add a camera for first-person view
    const camera = new BABYLON.UniversalCamera("FirstPersonCamera", new BABYLON.Vector3(0, 2, -10), scene);
    camera.attachControl(canvas, true);

    // Enable movement controls
    camera.keysUp.push(87); // W
    camera.keysDown.push(83); // S
    camera.keysLeft.push(65); // A
    camera.keysRight.push(68); // D

    // Add light to the scene
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity = 0.8;

    BABYLON.SceneLoader.Append(
        "./assets/models/", // Path to the folder containing your .obj
        "Kauai_Hawaii.obj", // Model file name
        scene,
        function () {
            console.log("Model loaded successfully!");

            // Apply texture to the terrain
            const terrain = scene.getMeshByName("Kauai_Hawaii"); // Adjust to match the loaded model name
            if (terrain) {
                const terrainMaterial = new BABYLON.StandardMaterial("terrainMaterial", scene);
                terrainMaterial.diffuseTexture = new BABYLON.Texture(
                    "textures/BING_SAT_WM.png", // Path to the texture file
                    scene
                );
                terrain.material = terrainMaterial;
            } else {
                console.error("Terrain model not found!");
            }
        },
        null,
        function (message) {
            console.error("Error loading model:", message);
        }
    );

    // Add a skybox
    const skybox = BABYLON.MeshBuilder.CreateBox("skyBox", { size: 1000 }, scene);
    const skyboxMaterial = new BABYLON.StandardMaterial("skyBoxMaterial", scene);
    skyboxMaterial.backFaceCulling = false;
    skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("textures/skybox", scene);
    skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
    skyboxMaterial.disableLighting = true;
    skybox.material = skyboxMaterial;

    // Run the render loop
    engine.runRenderLoop(function () {
        scene.render();
    });

    // Resize the engine on window resize
    window.addEventListener('resize', function () {
        engine.resize();
    });
});
