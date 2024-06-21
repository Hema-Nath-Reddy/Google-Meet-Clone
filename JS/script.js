setTimeout(
  document.addEventListener("DOMContentLoaded", () => {
    //the below code is to update the time on the bottom left corner
    const time = document.querySelector(".time");
    function timer() {
      const currentDate = new Date();
      let hours = currentDate.getHours();
      let AMorPM = "AM";
      if (hours >= 12) {
        AMorPM = "PM";
      }
      if (hours > 12) {
        hours -= 12;
      }
      const minutes = currentDate.getMinutes().toString().padStart(2, "0");
      time.innerHTML = hours + ":" + minutes + " " + AMorPM;
    }
    timer();
    setInterval(timer, 60000);

    //the below code is to add or remove a slash on the microphone and the video icons
    const audio = document.querySelector(".muted");
    const video = document.querySelector(".Video");
    const Microphone = document.querySelector(".Microphone");
    const Camera = document.querySelector(".Camera");
    let audioclicked = false;
    let videoclicked = false;
    const videon = document.querySelector(".videoon");
    const pfp = document.querySelector(".lasttile .pfp");
    async function askForPermissions() {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: true,
        });
        audio.disabled = false;
        video.disabled = false;
      } catch (err) {
        audio.disabled = true;
        video.disabled = true;
      }
    }

    askForPermissions();
    function cameraAPI() {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        video.disabled = false;
        const constraints = { video: true };
        navigator.mediaDevices
          .getUserMedia(constraints)
          .then((stream) => {
            videon.srcObject = stream;
            video.disabled = false;
          })
          .catch((error) => {
            video.disabled = true;
          });
      } else {
        alert("Camera API not supported by this browser.");
      }
    }

    function videoControl() {
      videoclicked = !videoclicked;
      if (videoclicked) {
        video.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"> <path fill="#ffffff" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z"/> </svg> ' +
          "<p>Turn off camera (ctrl + c)</p>";
        video.style.backgroundColor = "#303030";
        Camera.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"> <path fill="#ffffff" d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z"/> </svg> ' +
          "<p>Camera on</p>";
        videon.style.display = "block";
        pfp.style.display = "none";
        cameraAPI();
      } else {
        video.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-86.4-67.7 13.8 9.2c9.8 6.5 22.4 7.2 32.9 1.6s16.9-16.4 16.9-28.2V128c0-11.8-6.5-22.6-16.9-28.2s-23-5-32.9 1.6l-96 64L448 174.9V192 320v5.8l-32-25.1V128c0-35.3-28.7-64-64-64H113.9L38.8 5.1zM407 416.7L32.3 121.5c-.2 2.1-.3 4.3-.3 6.5V384c0 35.3 28.7 64 64 64H352c23.4 0 43.9-12.6 55-31.3z"/></svg> ' +
          "<p>Turn on camera (ctrl + c)</p>";
        video.style.backgroundColor = "#ea4335";
        Camera.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-86.4-67.7 13.8 9.2c9.8 6.5 22.4 7.2 32.9 1.6s16.9-16.4 16.9-28.2V128c0-11.8-6.5-22.6-16.9-28.2s-23-5-32.9 1.6l-96 64L448 174.9V192 320v5.8l-32-25.1V128c0-35.3-28.7-64-64-64H113.9L38.8 5.1zM407 416.7L32.3 121.5c-.2 2.1-.3 4.3-.3 6.5V384c0 35.3 28.7 64 64 64H352c23.4 0 43.9-12.6 55-31.3z"/></svg>' +
          " <p>Camera off</p>";
        videon.style.display = "none";
        pfp.style.display = "block";
      }
      Camera.style.display = "flex";
      setTimeout(() => {
        Camera.style.display = "none";
      }, 1500);
    }
    video.addEventListener("click", videoControl);
    async function volume() {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        const audioContext = new (window.AudioContext || window.AudioContext)();
        const analyser = audioContext.createAnalyser();
        analyser.fftSize = 256;
        const source = audioContext.createMediaStreamSource(mediaStream);
        source.connect(analyser);
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        document.querySelectorAll(".speaking").forEach((speakingElement) => {
          speakingElement.style.display = "flex";
        });

        function updateAnimation() {
          analyser.getByteFrequencyData(dataArray);

          let sum = 0;
          for (let i = 0; i < bufferLength; i++) {
            sum += dataArray[i];
          }
          const average = sum / bufferLength;
          const scale = Math.min(average / 128, 1);

          const heights = [
            `calc(max(0.1dvh, 0.1dvw) + ${scale * 3}dvh)`,
            `calc(max(0.1dvh, 0.1dvw) + ${scale * 5}dvh)`,
            `calc(max(0.1dvh, 0.1dvw) + ${scale * 4}dvh)`,
          ];

          document.querySelectorAll(".speaking").forEach((speakingElement) => {
            const dots = speakingElement.querySelectorAll(".dot");
            dots[0].style.height = heights[0];
            dots[1].style.height = heights[1];
            dots[2].style.height = heights[2];
          });

          requestAnimationFrame(updateAnimation);
        }
        video.disabled = false;
        updateAnimation();
      } catch (err) {
        audio.disabled = true;
      }
    }

    function micControl() {
      const speaking = document.querySelectorAll(".speaking");
      audioclicked = !audioclicked;
      if (audioclicked) {
        audio.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"> <path d="M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z"/> </svg>' +
          "<p>Turn off microphone(ctrl + m)</p>";
        audio.style.backgroundColor = "#303030";
        Microphone.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"> <path d="M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z"/> </svg>' +
          "<p>Microphone on</p>";
        speaking.forEach((speak) => {
          speak.style.display = "flex";
          speak.previousElementSibling.style.display = "none";
        });
        volume();
      } else {
        audio.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="#5F6368"> <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L472.1 344.7c15.2-26 23.9-56.3 23.9-88.7V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 21.2-5.1 41.1-14.2 58.7L416 300.8V96c0-53-43-96-96-96s-96 43-96 96v54.3L38.8 5.1zm362.5 407l-43.1-33.9C346.1 382 333.3 384 320 384c-70.7 0-128-57.3-128-128v-8.7L144.7 210c-.5 1.9-.7 3.9-.7 6v40c0 89.1 66.2 162.7 152 174.4V464H248c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H344V430.4c20.4-2.8 39.7-9.1 57.3-18.2z"/> </svg>' +
          "<p>Turn on microphone(ctrl + m)</p>";
        audio.style.backgroundColor = "#ea4335";
        Microphone.innerHTML =
          ' <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="#5F6368"> <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L472.1 344.7c15.2-26 23.9-56.3 23.9-88.7V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 21.2-5.1 41.1-14.2 58.7L416 300.8V96c0-53-43-96-96-96s-96 43-96 96v54.3L38.8 5.1zm362.5 407l-43.1-33.9C346.1 382 333.3 384 320 384c-70.7 0-128-57.3-128-128v-8.7L144.7 210c-.5 1.9-.7 3.9-.7 6v40c0 89.1 66.2 162.7 152 174.4V464H248c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H344V430.4c20.4-2.8 39.7-9.1 57.3-18.2z"/> </svg>' +
          "<p>Microphone off</p>";
        speaking.forEach((speak) => {
          speak.style.display = "none";
          speak.previousElementSibling.style.display = "block";
        });
      }
      Microphone.style.display = "flex";
      setTimeout(() => {
        Microphone.style.display = "none";
      }, 1500);
    }
    audio.addEventListener("click", micControl);

    //This is to show the audio or video settings when the respective arrow is clicked.
    let audiosvgclicked = false;
    let vidoesvgclicked = false;
    const audiotab = document.querySelector("footer .audio-settings");
    const videotab = document.querySelector("footer .video-settings");
    const audiosvg = document.querySelector(
      "footer .middle .videocall .audiosvg"
    );
    const videosvg = document.querySelector(
      "footer .middle .videocall .videosvg"
    );
    audiosvg.addEventListener("click", () => {
      audiosvgclicked = !audiosvgclicked;
      if (audiosvgclicked) {
        audiosvg.classList.add("rotate");
        audiotab.style.display = "flex";
        setTimeout(() => {
          audiotab.style.top = "-120%";
        }, 100);
      } else {
        audiotab.style.top = "250%";
        audiosvg.classList.remove("rotate");
        setTimeout(() => {
          audiotab.style.display = "none";
        }, 100);
      }
    });
    videosvg.addEventListener("click", () => {
      vidoesvgclicked = !vidoesvgclicked;
      if (vidoesvgclicked) {
        videosvg.classList.add("rotate");
        videotab.style.display = "flex";
        setTimeout(() => {
          videotab.style.top = "-120%";
        }, 100);
      } else {
        videotab.style.top = "250%";
        videosvg.classList.remove("rotate");
        setTimeout(() => {
          videotab.style.display = "none";
        }, 100);
      }
    });

    //The below code is to show the appropriate layout
    let presentclicked = false;
    const presneticon = document.querySelector(".presenticon");
    const sidebar = document.querySelector(".sidebar");
    const main = document.querySelector("main");
    const header = document.querySelector("header");

    presneticon.addEventListener("click", function () {
      presentclicked = !presentclicked;
      if (presentclicked) {
        main.classList.remove("displayer");
        header.classList.remove("displayer");
        sidebar.classList.remove("Section");
        sidebar.classList.remove("Section1");
      } else {
        main.classList.add("displayer");
        header.classList.add("displayer");
        sidebar.classList.add("Section");
        sidebar.classList.add("Section1");
      }
      if (somethingvisible() && !presentclicked) {
        sidebar.classList.add("Section");
        sidebar.classList.remove("Section1");
      }
    });

    function somethingvisible() {
      if (
        state.addonsClicked ||
        state.chatClicked ||
        state.hostsettingsClicked ||
        state.infoClicked ||
        state.participantsClicked
      ) {
        return true;
      } else {
        return false;
      }
    }
    function section1adder() {
      if (somethingvisible()) {
        sidebar.classList.remove("Section1");
      } else {
        sidebar.classList.add("Section1");
      }
    }

    let state = {
      chatClicked: false,
      participantsClicked: false,
      infoClicked: false,
      addonsClicked: false,
      hostsettingsClicked: false,
    };

    const elements = {
      comment: document.querySelector(".comment"),
      participantsicon: document.querySelector(".participants-icon"),
      infoicon: document.querySelector(".info-icon"),
      addonsicon: document.querySelector(".addons-icon"),
      hostsettingsicon: document.querySelector(".host-settings-icon"),
      participants: document.querySelector(".participants"),
      addons: document.querySelector(".addons"),
      hostsettings: document.querySelector(".host-settings"),
      sidebar: document.querySelector(".sidebar"),
      main: document.querySelector("main"),
      side: document.querySelector(".side"),
      info: document.querySelector(".info"),
      sections: document.querySelectorAll(".sides"),
      participantswrong: document.querySelector(".participants-wrong"),
      chatwrong: document.querySelector(".chat-wrong"),
      infowrong: document.querySelector(".info-wrong"),
      addonswrong: document.querySelector(".addons-wrong"),
      hostsettingswrong: document.querySelector(".host-settings-wrong"),
      righticons: document.querySelectorAll("footer .right span svg"),
      middleicons: document.querySelectorAll("footer .middle span svg"),
    };

    function hideAllSections() {
      elements.sections.forEach((section) => {
        section.classList.add("displayer");
      });
      elements.righticons.forEach((icon) => {
        icon.style.fill = "#ffffff";
      });
    }

    function updateMainAndSidebar() {
      const anySectionVisible = Object.values(state).some((clicked) => clicked);
      elements.main.classList.toggle("main", anySectionVisible);
      elements.sidebar.classList.toggle("section", anySectionVisible);
    }

    function toggleSection(section, flag) {
      const isVisible = !section.classList.contains("displayer");

      hideAllSections();
      Object.keys(state).forEach((key) => (state[key] = false));

      if (!isVisible) {
        section.classList.remove("displayer");
        state[flag] = true;
      }

      updateMainAndSidebar();
    }

    elements.participantsicon.addEventListener("click", () => {
      toggleSection(elements.participants, "participantsClicked");
      section1adder();
      if (!main.classList.contains("displayer")) {
        sidebar.classList.remove("Section1");
      }

      if (!elements.participants.classList.contains("displayer")) {
        elements.participantsicon.querySelector("svg").style.fill = "#8AB4F8";
      } else {
        elements.participantsicon.querySelector("svg").style.fill = "white";
      }
    });

    elements.participantswrong.addEventListener("click", () => {
      toggleSection(elements.participants, "participantsClicked");
      section1adder();
      if (!main.classList.contains("displayer")) {
        sidebar.classList.remove("Section1");
      }

      if (!elements.participants.classList.contains("displayer")) {
        elements.participantsicon.querySelector("svg").style.fill = "#8AB4F8";
      } else {
        elements.participantsicon.querySelector("svg").style.fill = "white";
      }
    });

    elements.comment.addEventListener("click", () => {
      toggleSection(elements.side, "chatClicked");
      section1adder();
      if (!main.classList.contains("displayer")) {
        sidebar.classList.remove("Section1");
      }

      if (!elements.side.classList.contains("displayer")) {
        elements.comment.querySelector("svg").style.fill = "#8AB4F8";
      } else {
        elements.comment.querySelector("svg").style.fill = "white";
      }
    });

    elements.chatwrong.addEventListener("click", () => {
      toggleSection(elements.side, "chatClicked");
      section1adder();
      if (!main.classList.contains("displayer")) {
        sidebar.classList.remove("Section1");
      }

      if (!elements.side.classList.contains("displayer")) {
        elements.comment.querySelector("svg").style.fill = "#8AB4F8";
      } else {
        elements.comment.querySelector("svg").style.fill = "white";
      }
    });

    elements.infoicon.addEventListener("click", () => {
      toggleSection(elements.info, "infoClicked");
      section1adder();
      if (!main.classList.contains("displayer")) {
        sidebar.classList.remove("Section1");
      }

      if (!elements.info.classList.contains("displayer")) {
        elements.infoicon.querySelector("svg").style.fill = "#8AB4F8";
      } else {
        elements.infoicon.querySelector("svg").style.fill = "white";
      }
    });

    elements.infowrong.addEventListener("click", () => {
      toggleSection(elements.info, "infoClicked");
      section1adder();
      if (!main.classList.contains("displayer")) {
        sidebar.classList.remove("Section1");
      }

      if (!elements.info.classList.contains("displayer")) {
        elements.infoicon.querySelector("svg").style.fill = "#8AB4F8";
      } else {
        elements.infoicon.querySelector("svg").style.fill = "white";
      }
    });

    elements.addonsicon.addEventListener("click", () => {
      toggleSection(elements.addons, "addonsClicked");
      section1adder();
      if (!main.classList.contains("displayer")) {
        sidebar.classList.remove("Section1");
      }
      if (!elements.addons.classList.contains("displayer")) {
        elements.addonsicon.querySelector("svg").style.fill = "#8AB4F8";
      } else {
        elements.addonsicon.querySelector("svg").style.fill = "white";
      }
    });

    elements.addonswrong.addEventListener("click", () => {
      toggleSection(elements.addons, "addonsClicked");
      section1adder();
      if (!main.classList.contains("displayer")) {
        sidebar.classList.remove("Section1");
      }
      if (!elements.addons.classList.contains("displayer")) {
        elements.addonsicon.querySelector("svg").style.fill = "#8AB4F8";
      } else {
        elements.addonsicon.querySelector("svg").style.fill = "white";
      }
    });

    elements.hostsettingsicon.addEventListener("click", () => {
      toggleSection(elements.hostsettings, "hostsettingsClicked");
      section1adder();
      if (!main.classList.contains("displayer")) {
        sidebar.classList.remove("Section1");
      }
      if (!elements.hostsettings.classList.contains("displayer")) {
        elements.hostsettingsicon.querySelector("svg").style.fill = "#8AB4F8";
      } else {
        elements.hostsettingsicon.querySelector("svg").style.fill = "white";
      }
    });

    elements.hostsettingswrong.addEventListener("click", () => {
      toggleSection(elements.hostsettings, "hostsettingsClicked");
      section1adder();
      if (!main.classList.contains("displayer")) {
        sidebar.classList.remove("Section1");
      }
      if (!elements.hostsettings.classList.contains("displayer")) {
        elements.hostsettingsicon.querySelector("svg").style.stroke = "#8AB4F8";
      } else {
        elements.hostsettingsicon.querySelector("svg").style.stroke = "white";
      }
    });
    //The below code is for the chat
    const sendchat = document.querySelector(".submit");

    sendchat.addEventListener("click", () => {
      const newdate = new Date();
      const chatmessage = document.querySelector(".Time");
      chatmessage.innerHTML = newdate.getHours() + ":" + newdate.getMinutes();
    });
    //Prevent the default behaviour of the form of refreshing the page once submitted.
    document.querySelectorAll("form").forEach(function (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
      });
    });

    //The below code is to show the message in the chat sidebar once the form is submitted.
    const messageinput = document.querySelector(".Middle ~ form input");
    const btn = document.querySelector(".Middle ~ form .submit");
    btn.disabled = true;
    messageinput.addEventListener("input", function () {
      if (messageinput.value.trim() === "") {
        btn.disabled = true;
      } else {
        btn.disabled = false;
      }
    });
    document.querySelector(".Middle ~ form").addEventListener("submit", (e) => {
      const input = document.querySelector(".Middle ~ form input");
      const inputvalue = input.value;

      const chatsDiv = document.createElement("div");
      chatsDiv.classList.add("chats");

      const Sender = "You";
      const SenderElement = document.createElement("p");
      SenderElement.classList.add("sender");
      SenderElement.innerHTML = Sender;
      chatsDiv.appendChild(SenderElement);

      const currentTime = new Date();
      const TimeElment = document.createElement("p");
      TimeElment.classList.add("Time");
      const minutes = currentTime.getMinutes().toString().padStart(2, "0");
      TimeElment.innerHTML = currentTime.getHours() + ":" + minutes;
      chatsDiv.appendChild(TimeElment);

      document.querySelector(".Middle").appendChild(chatsDiv);

      const messageElement = document.createElement("p");
      messageElement.classList.add("message");
      messageElement.innerHTML = inputvalue;
      document.querySelector(".Middle").appendChild(messageElement);
      input.value = "";
      btn.disabled = true;
    });
    //This is to collpase the participants
    const specialArrow = document.querySelector(".special-arrow");
    const people = document.querySelector(".people");
    const contributors = document.querySelector(".contributors");
    specialArrow.addEventListener("click", () => {
      people.classList.toggle("table");
      specialArrow.classList.toggle("rotate");
      contributors.classList.toggle("contributors-added");
    });
    //The below code is to count the number of contributors/participants;
    let count = 0;
    const person = document.querySelectorAll(".person");
    const countpara = document.querySelector(".count");
    const noofparticipants = document.querySelector(".noofparticipants");
    person.forEach(function (per) {
      count += 1;
    });
    countpara.innerHTML = count - 1;
    noofparticipants.innerHTML = count - 1;

    //The below code is to generate a random meeting code.
    const meetingcode = document.querySelector(".meeting-code");
    const Meetingcode = document.querySelectorAll(".special-meeting-link");
    function generateString() {
      function randomCharacter() {
        const characters = "abcdefghijklmnopqrstuvwxyz";
        return characters.charAt(Math.floor(Math.random() * characters.length));
      }
      let str = "";
      for (let i = 0; i < 3; i++) {
        str += randomCharacter();
      }
      str += "-";
      for (let i = 0; i < 4; i++) {
        str += randomCharacter();
      }
      str += "-";
      for (let i = 0; i < 3; i++) {
        str += randomCharacter();
      }
      return str;
    }
    const generatedString = generateString();
    meetingcode.innerHTML = generatedString;
    Meetingcode.forEach((mc) => {
      mc.innerHTML = "https://meet.google.com/" + generatedString;
    });

    //The below code is to generate random US number which will be displayed in the meeting details sidebar
    function generateUSnumber() {
      function randomCharacter() {
        const characters = "1234567890";
        return characters.charAt(Math.floor(Math.random() * characters.length));
      }

      let str = "";
      for (let i = 0; i < 3; i++) {
        str += randomCharacter();
      }
      str += "-";
      for (let i = 0; i < 3; i++) {
        str += randomCharacter();
      }
      str += "-";
      for (let i = 0; i < 4; i++) {
        str += randomCharacter();
      }

      while (str.charAt(0) === "0") {
        str = randomCharacter() + str.slice(1);
      }
      return str;
    }
    //The below code is to generate random pin code which will be displayed in the meeting details sidebar
    const usnumber = document.querySelectorAll(".special-us-code");
    const justusnumber = "+1 " + generateUSnumber();
    usnumber.forEach((us) => {
      us.innerHTML = "<span>Dial-In:</span>(US)  " + justusnumber;
    });

    function generatepin() {
      function randomCharacter() {
        const characters = "1234567890";
        return characters.charAt(Math.floor(Math.random() * characters.length));
      }
      let str = "";
      for (let i = 0; i < 3; i++) {
        str += randomCharacter();
      }
      str += " ";
      for (let i = 0; i < 3; i++) {
        str += randomCharacter();
      }
      str += " ";
      for (let i = 0; i < 3; i++) {
        str += randomCharacter();
      }

      while (str.charAt(0) === "0") {
        str = randomCharacter() + str.slice(1);
      }
      return str;
    }
    const pin = document.querySelectorAll(".special-pin");
    const generatedpin = generatepin();
    pin.forEach((Pin) => {
      Pin.innerHTML = "<span>PIN:</span> " + generatedpin + " #";
    });

    //this is to copy the joining info into clipboard
    const cjf = document.querySelector(".cjf");
    const Cjf = document.querySelector(".cjf-message");
    let cjfclicked = false;
    function textcopy() {
      let meetingCodeText = document.querySelector(".sml").textContent;
      let usNumberText = justusnumber;
      let pinText = document
        .querySelector(".special-pin")
        .textContent.slice(0, -1);
      let copiedText =
        "To join the video meeting, click this link: " +
        meetingCodeText +
        "\n" +
        "Otherwise, to join by phone, dial " +
        usNumberText +
        " and enter this " +
        pinText +
        "\n";

      let textarea = document.createElement("textarea");
      textarea.value = copiedText;
      textarea.style.display = "none";
      document.body.appendChild(textarea);

      textarea.select();
      navigator.clipboard
        .writeText(copiedText)
        .then(() => {
          cjfclicked = !cjfclicked;
          if (cjfclicked) {
            Cjf.classList.remove("Cjf-message");
            setTimeout(() => {
              Cjf.classList.add("Cjf-message");
            }, 2000);
          } else {
            Cjf.classList.add("Cjf-message");
          }
        })
        .catch((error) => {
          console.error("Failed to copy:", error);
        })
        .finally(() => {
          document.body.removeChild(textarea);
        });
    }
    cjf.addEventListener("click", textcopy);
    document.querySelector(".CJF").addEventListener("click", textcopy);

    //This is to show more featured add-ons or to hide them
    const sm = document.querySelector(".sm");
    const row2 = document.querySelector(".addons .items .row2");
    let smclicked = true;
    row2.style.display = "none";
    sm.addEventListener("click", () => {
      if (smclicked) {
        sm.innerHTML = "Show less";
        row2.style.display = "grid";
      } else {
        sm.innerHTML = "Show more";
        row2.style.display = "none";
      }
      smclicked = !smclicked;
    });
    //This is to style the icons in the middle of the footer
    let captionclicked = false;
    const captions = document.querySelector(".captions");
    const caption = document.querySelector(".caption");
    function captionHandling() {
      captionclicked = !captionclicked;
      if (captionclicked) {
        captions.querySelector("p").innerHTML = "Turn off captions(c)";
        captions.style.backgroundColor = "#91B5F4";
        captions.querySelector("svg").style.fill = "#1B1F29";
        caption.classList.remove("Caption");
        setTimeout(() => {
          caption.classList.add("Caption");
        }, 1000);
      } else {
        captions.querySelector("p").innerHTML = "Turn on captions(c)";
        captions.style.backgroundColor = "";
        captions.querySelector("svg").style.fill = "";
        caption.classList.add("Caption");
      }
    }
    captions.addEventListener("click", captionHandling);

    let handclicked = false;
    const hand = document.querySelector(".hand");
    const Hand = document.querySelector(".lasttile .hn svg");
    function handHandling() {
      handclicked = !handclicked;
      if (handclicked) {
        hand.style.backgroundColor = "#91B5F4";
        hand.querySelector("svg").style.fill = "#1B1F29";
        hand.querySelector("p").innerHTML = "Lower hand(ctrl + alt +h)";
        Hand.style.display = "block";
      } else {
        hand.style.backgroundColor = "";
        hand.querySelector("svg").style.fill = "";
        hand.querySelector("p").innerHTML = "Raise hand(ctrl + alt +h)";
        Hand.style.display = "none";
      }
    }
    hand.addEventListener("click", handHandling);

    let reactionclicked = false;
    const reaction = document.querySelector(".reaction");
    const emojis = document.querySelector("footer .emojis");
    reaction.addEventListener("click", () => {
      reactionclicked = !reactionclicked;
      if (reactionclicked) {
        reaction.style.backgroundColor = "#91B5F4";
        reaction.querySelector("svg").style.fill = "#1B1F29";
        emojis.style.display = "flex";
        setTimeout(() => {
          emojis.style.top = "-120%";
        }, 100);
      } else {
        reaction.style.backgroundColor = "";
        reaction.querySelector("svg").style.fill = "";
        emojis.style.top = "250%";
        setTimeout(() => {
          emojis.style.display = "none";
        }, 100);
      }
    });

    let moreOptionsclicked = false;
    const moreOptions = document.querySelector(".more-options");
    const moreOptioNs = document.querySelector("footer .more-option");
    moreOptions.addEventListener("click", () => {
      moreOptionsclicked = !moreOptionsclicked;
      if (moreOptionsclicked) {
        moreOptions.style.backgroundColor = "#91B5F4";
        moreOptions.querySelector("svg").style.fill = "#1B1F29";
        moreOptioNs.style.display = "block";
      } else {
        moreOptions.style.backgroundColor = "";
        moreOptions.querySelector("svg").style.fill = "";
        moreOptioNs.style.display = "none";
      }
    });
    document.querySelector(".presenticon").addEventListener("click", () => {
      const presentIcon = document.querySelector(".presenticon");
      const main = document.querySelector("main");
      const isMainDisplayer = main.classList.contains("displayer");
      const Person = document.querySelector(".Person");
      if (!isMainDisplayer) {
        presentIcon.style.backgroundColor = "#91B5F4";
        presentIcon.querySelector("svg").style.fill = "#1B1F29";
        Person.style.display = "";
        countpara.innerHTML = count;
        noofparticipants.innerHTML = count;
      } else {
        presentIcon.style.backgroundColor = "";
        presentIcon.querySelector("svg").style.fill = "";
        Person.style.display = "none";
        countpara.innerHTML = count - 1;
        noofparticipants.innerHTML = count - 1;
      }
    });

    //This is for the shortcuts
    document.addEventListener("keydown", (event) => {
      const ctrlPressed = event.ctrlKey || event.metaKey;
      const mPressed = event.key === "m" || event.key === "M";
      const cPressed = event.key === "c" || event.key === "c";
      const shiftPressed = event.shiftKey;
      const hPressed = event.key === "h" || event.key === "H";
      if (ctrlPressed) {
        if (shiftPressed && hPressed) {
          handHandling();
        } else if (mPressed) {
          micControl();
        } else if (cPressed) {
          videoControl();
        }
      }
      if (cPressed && !ctrlPressed) {
        captionHandling();
      }
    });

    const emojiClassNames = [
      ".heart",
      ".thumbsup",
      ".party",
      ".wave",
      ".laughing",
      ".surprised",
      ".sad",
      ".thinking",
      ".thumbsdown",
    ];

    emojiClassNames.forEach((className) => {
      const emoji = document.querySelector(className);
      const Emoji = document.querySelector(
        "." + className.slice(1).charAt(0).toUpperCase() + className.slice(2)
      );

      emoji.addEventListener("click", () => {
        Emoji.style.opacity = "1";
        Emoji.style.display = "";
        Emoji.style.animation = "emoji 1.5s normal linear";
        setTimeout(() => {
          Emoji.style.animation = "";
          Emoji.style.display = "none";
        }, 1501);
      });
    });
    //The below code is for the respective toggle buttons under host controls/ host settings section
    const mainradio = document.querySelector(".mainradio");
    const radios = document.querySelectorAll(
      ".le .radio, .host-management .radio"
    );
    const hmjRadio = document.querySelector(".hmj .radio");
    let hmjRadioClicked = false;
    let mainradioClicked = false;
    radios.forEach((radio) => {
      radio.disabled = true;
    });

    function manipulator(clicked, element) {
      const inner = element.querySelector(".inner");
      if (clicked) {
        element.disabled = false;
        element.classList.add("styles");
        inner.innerHTML =
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>';
      } else {
        element.disabled = true;
        element.classList.remove("styles");
        inner.innerHTML =
          ' <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>';
      }
    }

    mainradio.addEventListener("click", () => {
      mainradioClicked = !mainradioClicked;
      manipulator(mainradioClicked, mainradio);
      if (!mainradioClicked) {
        radios.forEach((radio) => {
          radio.classList.remove("styles");
          radio.querySelector(".inner").innerHTML =
            ' <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>';
        });
      }
      const modal = document.querySelector(".modal");
      if (mainradioClicked) {
        modal.showModal();
      }
      document.querySelector(".cancel").addEventListener("click", () => {
        modal.close();
      });
    });
    radios.forEach((radio) => {
      let radioclicked = false;
      radio.addEventListener("click", () => {
        radioclicked = !radioclicked;
        manipulator(radioclicked && mainradioClicked, radio);
        if (!mainradioClicked) {
          radioclicked = false;
          radio.disabled = true;
        }
      });
    });

    hmjRadio.addEventListener("click", () => {
      hmjRadioClicked = !hmjRadioClicked;
      manipulator(hmjRadioClicked, hmjRadio);
    });

    const attendanceRadio = document.querySelector(
      ".attendance-tracking .radio"
    );
    let attendanceClicked = false;
    attendanceRadio.addEventListener("click", () => {
      attendanceClicked = !attendanceClicked;
      manipulator(attendanceClicked, attendanceRadio);
    });

    const doorRadio = document.getElementById("open");
    const door = document.querySelector(".door");
    document.querySelector(".mca form").addEventListener("input", () => {
      if (doorRadio.checked) {
        door.style.display = "grid";
      } else {
        door.style.display = "none";
      }
    });

    const mainRadioQA = document.querySelector(".qa1 .radio");
    const radiosQA = document.querySelectorAll(".qa .radio:not(.qa1 .radio)");
    let mainRadioClickedQA = false;

    radiosQA.forEach((radio) => {
      radio.disabled = true;
    });

    mainRadioQA.addEventListener("click", () => {
      mainRadioClickedQA = !mainRadioClickedQA;
      manipulator(mainRadioClickedQA, mainRadioQA);
      if (mainRadioClickedQA) {
        document.querySelector(".message2").style.display = "flex";
        setTimeout(() => {
          document.querySelector(".message2").style.display = "none";
        }, 2000);
      } else {
        radiosQA.forEach((radio) => {
          radio.classList.remove("styles");
          radio.querySelector(".inner").innerHTML =
            ' <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>';
        });
        document.querySelector(".message1").style.display = "flex";
        setTimeout(() => {
          document.querySelector(".message1").style.display = "none";
        }, 2000);
      }
    });

    radiosQA.forEach((radio) => {
      let radioclickedQA = false;
      radio.addEventListener("click", () => {
        radioclickedQA = !radioclickedQA;
        manipulator(radioclickedQA && mainRadioClickedQA, radio);
        if (!mainRadioClickedQA) {
          radioclickedQA = false;
          radio.disabled = true;
        }
      });
    });
    //Display the appropriate message when the appropriate button is clicked.
    const qa2 = document.querySelector(".qa2");
    let qa2Clicked = false;
    const qa3 = document.querySelector(".qa3");
    let qa3Clicked = false;
    const qa4 = document.querySelector(".qa4");
    let qa4Clicked = false;
    qa2.addEventListener("click", () => {
      qa2Clicked = !qa2Clicked;
      if (mainRadioClickedQA) {
        if (qa2Clicked) {
          document.querySelector(".message3").style.display = "flex";
          setTimeout(() => {
            document.querySelector(".message3").style.display = "none";
          }, 2000);
        } else {
          document.querySelector(".message4").style.display = "flex";
          setTimeout(() => {
            document.querySelector(".message4").style.display = "none";
          }, 2000);
        }
      }
    });
    qa3.addEventListener("click", () => {
      qa3Clicked = !qa3Clicked;
      if (mainRadioClickedQA) {
        if (qa3Clicked) {
          document.querySelector(".message6").style.display = "flex";
          setTimeout(() => {
            document.querySelector(".message6").style.display = "none";
          }, 2000);
        } else {
          document.querySelector(".message5").style.display = "flex";
          setTimeout(() => {
            document.querySelector(".message5").style.display = "none";
          }, 2000);
        }
      }
    });
    qa4.addEventListener("click", () => {
      qa4Clicked = !qa4Clicked;
      if (mainRadioClickedQA) {
        if (qa4Clicked) {
          document.querySelector(".message8").style.display = "flex";
          setTimeout(() => {
            document.querySelector(".message8").style.display = "none";
          }, 2000);
        } else {
          document.querySelector(".message7").style.display = "flex";
          setTimeout(() => {
            document.querySelector(".message7").style.display = "none";
          }, 2000);
        }
      }
    });
  }),
  1000
);
