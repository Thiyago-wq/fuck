const religionsData = {
  brasil: {
    name: "Brasil",
    religions: [
      {
        name: "Cristianismo",
        description: "A religião predominante no Brasil, especialmente o catolicismo, introduzido pelos colonizadores portugueses, com forte presença evangélica atualmente."
      },
      {
        name: "Espiritismo",
        description: "Movimento religioso com influência significativa no Brasil, baseado nas obras de Allan Kardec, focado na comunicação com os espíritos."
      }
    ]
  },
  india: {
    name: "Índia",
    religions: [
      {
        name: "Hinduísmo",
        description: "Religião predominante na Índia, uma das mais antigas do mundo, que envolve crenças em múltiplos deuses e reencarnação."
      },
      {
        name: "Islamismo",
        description: "Segunda maior religião na Índia, com significativa população muçulmana e forte influência cultural."
      },
      {
        name: "Budismo",
        description: "Originado na Índia, o budismo ensina o caminho para a iluminação e fim do sofrimento."
      }
    ]
  },
  egito: {
    name: "Egito",
    religions: [
      {
        name: "Islamismo",
        description: "Religião predominante no Egito, a maioria dos egípcios são muçulmanos sunitas."
      },
      {
        name: "Cristianismo Copta",
        description: "Uma das comunidades cristãs mais antigas do mundo, com presença significativa no Egito."
      }
    ]
  },
  china: {
    name: "China",
    religions: [
      {
        name: "Budismo",
        description: "Muito presente na cultura chinesa, com várias escolas budistas adaptadas localmente."
      },
      {
        name: "Taoismo",
        description: "Religião nativa da China que enfatiza a harmonia com o Tao (caminho), a natureza e o universo."
      },
      {
        name: "Confucionismo",
        description: "Mais uma filosofia/religião, focada na ética, moral e organização social."
      }
    ]
  },
  usa: {
    name: "Estados Unidos",
    religions: [
      {
        name: "Cristianismo",
        description: "Religião predominante nos EUA, com grande diversidade de denominações protestantes e católicas."
      },
      {
        name: "Judaísmo",
        description: "Comunidade judaica significativa, especialmente em grandes centros urbanos."
      },
      {
        name: "Islamismo",
        description: "Religião minoritária crescente nos EUA, com presença em várias comunidades."
      }
    ]
  }
};

const map = document.getElementById("world-map");
const countryNameEl = document.getElementById("country-name");
const religionsInfoEl = document.getElementById("religions-info");

map.querySelectorAll("path").forEach(path => {
  path.addEventListener("click", () => {
    const countryId = path.id;
    const data = religionsData[countryId];
    if (data) {
      countryNameEl.textContent = data.name;
      religionsInfoEl.innerHTML = "";
      data.religions.forEach(rel => {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${rel.name}:</strong> ${rel.description}`;
        religionsInfoEl.appendChild(p);
      });
    } else {
      countryNameEl.textContent = "Informações não disponíveis";
      religionsInfoEl.innerHTML = "<p>Não temos dados sobre este país.</p>";
    }
  });
});
