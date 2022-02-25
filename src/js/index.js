$(document).ready(function () {
    const projectsArray = [
        {
            id: 0,
            title: "Stolen My Paper".toUpperCase(),
            imageUrl: "./images/projectImage0.png",
            description: `Stolen my paper is a 3rd person hyper casual game where you can find a way to steal the final exam paper by sneaking into the school premises. Player must do mini tasks and solve simple puzzles to reach to his goals. `,
            trailerTag: `<iframe width="640" height="480" src="https://www.youtube.com/embed/38tdoIjw2i4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
            released: "2020",
            studio: "R-Factory Gaming",
            platforms: "Android",
            teamSize: 2,
            projectLength: "1 month",
            engineAndTools: "Unity , Adobe Photoshop & Illustrator",
            rolesAndWork: [
                `Program the game and implement it using C# and unity 3D.`,
                `Designed and build an environment for all the levels.`,
                `Object animation, UI design and other artistic asset designing.`,
            ],
            screenshots: [
                "./images/SMP/SMP1.jpg",
                "./images/SMP/SMP2.jpg",
                "./images/SMP/SMP3.jpg",
                "./images/SMP/SMP4.jpg",
                "./images/SMP/SMP5.jpg",
            ],
            isMobile: false,
        },
        {
            id: 1,
            title: "Fill My Way".toUpperCase(),
            imageUrl: "./images/projectImage1.png",
            description: `This is a hyper-casual running game based on building roads using color stacks. The main task of this game is to collect color stacks on the road and fill the black spaces using collected stacks. There are three different paths you have to fill your way while running forward.`,
            trailerTag: `<iframe src="https://drive.google.com/file/d/1mzuDa4zNT2KsNRl5Phvtmh7599mIIL3m/preview" width="640" height="480" allow="autoplay"></iframe>`,
            released: "2020",
            studio: "R-Factory Gaming",
            platforms: "Android",
            teamSize: 2,
            projectLength: "1 month",
            engineAndTools: "Unity , Adobe Photoshop & Illustrator",
            rolesAndWork: [
                `Worked on level & environment design.`,
                `Program the game and implement it using C# and unity 3D.`,
                `Character modelling and animation.`,
                `UI design and other art assets including illustrations and background.`,
            ],
            screenshots: [
                "./images/FMW/FMW1.jpg",
                "./images/FMW/FMW2.jpg",
                "./images/FMW/FMW3.webp",
                "./images/FMW/FMW4.webp",
                "./images/FMW/FMW5.webp",
            ],
            isMobile: true,
        },
        {
            id: 2,
            title: "The Last Samurai".toUpperCase(),
            imageUrl: "./images/projectImage2.png",
            description: `The last samurai is a 2D platformer game that I was created for the Game Technology project at the university.  The game has controller like Mario. For the Development process I used Unity engine and C# language.`,
            trailerTag: `<iframe src="https://drive.google.com/file/d/1osgl1w00uo8HRfq9ZTHuX5b_CHLUcqhU/preview" width="640" height="480" allow="autoplay"></iframe>`,
            released: "",
            studio: "",
            platforms: "PC",
            teamSize: 1,
            projectLength: "1 week",
            engineAndTools: "Unity , Adobe Photoshop",
            rolesAndWork: [],
            screenshots: [
                "./images/TLS/TLS1.png",
                "./images/TLS/TLS2.png",
                "./images/TLS/TLS3.png",
                "./images/TLS/TLS4.png",
            ],
            isMobile: false,
        },
        {
            id: 3,
            title: "Ska8er".toUpperCase(),
            imageUrl: "./images/projectImage3.png",
            description: `Ska8er  is a 2D Space shooter game which was created for fun. It was made using construct 3 and I also did all the art assets and the level designing in-engine.`,
            trailerTag: `<iframe src="https://drive.google.com/file/d/1EaYi7NEtJyzsCxvaLDYr0WgGz3zHvcY4/preview" width="640" height="480" allow="autoplay"></iframe>`,
            released: "",
            studio: "",
            platforms: "PC",
            teamSize: 1,
            projectLength: "1 week",
            engineAndTools: "Construct 3 , Adobe Photoshop",
            rolesAndWork: [],
            screenshots: [
                "./images/SK8R/SK8R1.png",
                "./images/SK8R/SK8R2.png",
                "./images/SK8R/SK8R3.png",
                "./images/SK8R/SK8R4.png",
                "./images/SK8R/SK8R5.png",
            ],
            isMobile: false,
        },
        {
            id: 4,
            title: "SLIIT Navigation".toUpperCase(),
            imageUrl: "./images/projectImage4.png",
            description: `This is walkthrough simulator of main building of the SLIIT which is used for exploring the university premises. This project includes the areas of SLIIT Laboratories, Offices and Free areas that player can navigate. Player can also view the details of the lecturers while wander around the map. It was made for the PC and WebGL platforms.`,
            trailerTag: `<iframe src="https://drive.google.com/file/d/1G3lTCTyh767L6OH-rGHf9EpRve1hspCh/preview" width="640" height="480" allow="autoplay"></iframe>`,
            released: "",
            studio: "",
            platforms: "PC | Web",
            teamSize: 4,
            projectLength: "2 months",
            engineAndTools: "Unity , Blender , Adobe Photoshop",
            rolesAndWork: [
                `Environment design and programming the application.`,
                `Levels animating and designing.`,
                `Contribute for the 3D modelling process.`,
                `UI design and other art assets including illustrations and background.`,
            ],
            screenshots: [
                "./images/SNA/SNA1.png",
                "./images/SNA/SNA2.png",
                "./images/SNA/SNA3.png",
                "./images/SNA/SNA4.png",
                "./images/SNA/SNA5.png",
                "./images/SNA/SNA6.png",
                "./images/SNA/SNA7.png",
                "./images/SNA/SNA8.png",
                "./images/SNA/SNA9.png",
            ],
            isMobile: false,
        },
        {
            id: 5,
            title: "Dream".toUpperCase(),
            imageUrl: "./images/projectImage5.png",
            description: `Dream is a 2D platformer game that player has to escape from a haunted dream. The game was created with Unity engine. I created some of the art assets by using adobe photoshop. In this game player has think before his movements because player is limited to their actions.`,
            trailerTag: `<iframe src="https://drive.google.com/file/d/1dY-uEGZDZwHtlnKRkMZizUIwF9xuw38l/preview" width="640" height="480" allow="autoplay"></iframe>`,
            released: "",
            studio: "",
            platforms: "PC",
            teamSize: 1,
            projectLength: "1 week",
            engineAndTools: "Unity , Adobe Photoshop",
            rolesAndWork: [],
            screenshots: [
                "./images/DRM/DRM1.png",
                "./images/DRM/DRM2.png",
                "./images/DRM/DRM3.png",
                "./images/DRM/DRM4.png",
            ],
            isMobile: false,
        },
    ];

    projectsArray.forEach(project => {
        $(".appProjectsContent").append(`
            <div class="appProjectsContentCell" id="appProjectsContentCell-${project.id}">
                <h2 class="appProjectsContentCellTitle">${project.title}</h2>
                <div class="appProjectsContentCellImage">
                    <img src="${project.imageUrl}" alt="project_screenshot"
                        class="appProjectsContentCellImageContent">
                        </div>
                <div class="appProjectsContentCellDescription">
                    <h4 class="appProjectsContentCellDescriptionText">
                        ${project.description}
                    </h4>
                </div>
                <div class="appProjectsContentCellActions">
                    <button class="appProjectsContentCellActionsDetails primaryBtn" 
                        data-id="${project.id}">VIEW DETAILS</button>
                </div>
            </div>
        `);
    });

    $(document).on("click", ".appProjectsContentCellActionsDetails", function (e) {
        $(".projectModal").show();
        $("body").css("overflow", "hidden");

        // renders project inside modal
        const projectId = $(e.target).data("id");

        // select project from array
        const selectedProject = projectsArray.filter(project => project.id === projectId)[0];

        // set title
        $("#projectModalContentActionsTitle").text(selectedProject.title);

        // set trailer
        $("#projectModalContentBodyMetaSectionTrailer").html(selectedProject.trailerTag);

        // set meta info - description
        if (selectedProject.description !== "") {
            $("#projectModalContentBodyMetaSectionDetailsDescription").html(
                `${selectedProject.description}`);
        } else {
            $("#projectModalContentBodyMetaSectionDetailsDescription").html("");
        }

        // set meta info - released
        if (selectedProject.released !== "") {
            $("#projectModalContentBodyMetaSectionDetailsReleased").html(
                `<span class="metaSectionDetailKey">Released:</span> ${selectedProject.released}`);
        } else {
            $("#projectModalContentBodyMetaSectionDetailsReleased").html("");
        }

        // set meta info - studio
        if (selectedProject.studio !== "") {
            $("#projectModalContentBodyMetaSectionDetailsStudio").html(
                `<span class="metaSectionDetailKey">Studio:</span> ${selectedProject.studio}`);
        } else {
            $("#projectModalContentBodyMetaSectionDetailsStudio").html("");
        }

        // set meta info - platforms
        $("#projectModalContentBodyMetaSectionDetailsPlatforms").html(
            `<span class="metaSectionDetailKey">Platforms:</span> ${selectedProject.platforms}`);

        // set meta info - team size
        $("#projectModalContentBodyMetaSectionDetailsTeamSize").html(
            `<span class="metaSectionDetailKey">Team size:</span> ${selectedProject.teamSize}`);

        // set meta info - project length
        $("#projectModalContentBodyMetaSectionDetailsProjectLength").html(
            `<span class="metaSectionDetailKey">Project length:</span> ${selectedProject.projectLength}`);

        // set meta info - engine and tools
        $("#projectModalContentBodyMetaSectionDetailsEngineAndTools").html(
            `<span class="metaSectionDetailKey">Engine and Tools:</span> ${selectedProject.engineAndTools}`);

        // set meta info - roles and responsibilities
        if (selectedProject.rolesAndWork !== undefined && selectedProject.rolesAndWork.length > 0) {
            $("#projectModalContentBodyMetaSectionDetailsRolesAndWorks").html(`
                <h4 class="projectModalContentBodyMetaSectionDetailsRolesAndWorks metaSectionDetail">
                    <span class="metaSectionDetailKey">Contributions given:</span>
                </h4>
            `);
            for (let i = 0; i < (selectedProject.rolesAndWork).length; i++) {
                $("#projectModalContentBodyMetaSectionDetailsRolesAndWorks").append(`
                    <h5 class="projectModalContentBodyMetaSectionDetailsRolesAndWorks metaSectionDetail"
                        id="projectModalContentBodyMetaSectionDetailsRolesAndWorks-${i}">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${selectedProject.rolesAndWork[i]}
                    </h5>
                `);
            }
        }

        // set screenshots
        if (selectedProject.screenshots !== undefined && selectedProject.screenshots.length > 0) {
            $("#projectModalContentBodyScreenshotsSectionGallery").html("");
            let imageClassName = (selectedProject.isMobile !== undefined && selectedProject.isMobile === true)
                ? "projectModalContentBodyScreenshotsSectionGalleryImageMobile"
                : "projectModalContentBodyScreenshotsSectionGalleryImage";
            for (let i = 0; i < (selectedProject.screenshots).length; i++) {
                $("#projectModalContentBodyScreenshotsSectionGallery").append(`
                    <div class="${imageClassName}">
                        <img class="projectModalContentBodyScreenshotsSectionGalleryImageContent" 
                        src="${selectedProject.screenshots[i]}" alt="galleryImageContent" />
                    </div>
                `);
            }
        }
    });

    $(".closeProjectModal").click(function (e) {
        $(".projectModal").hide();
        $("body").css("overflow", "auto");
    });
});