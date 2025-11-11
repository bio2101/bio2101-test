// --- DATABASE OF ALL QUESTIONS ---
// Note: 'answer' is the 0-based index of the correct option.
const allQuestions = [
    // Lipids (Q81-Q93)
    {
        question: "Lipids are generally ________.",
        options: [
            "Soluble in water",
            "Insoluble in water but soluble in nonpolar solvents",
            "Ionic in nature",
            "Carbohydrate-based"
        ],
        answer: 1
    },
    {
        question: "The main elements found in lipids are ________.",
        options: ["C, H, O", "C, H, O, N", "C, H, O, P", "C and O only"],
        answer: 0
    },
    {
        question: "The basic building blocks of most fats are ________.",
        options: [
            "Amino acids and nucleotides",
            "Fatty acids and glycerol",
            "Monosaccharides",
            "Peptides"
        ],
        answer: 1
    },
    {
        question: "A molecule consisting of three fatty acids and one glycerol is called a ________.",
        options: ["Monoglyceride", "Triglyceride", "Phospholipid", "Steroid"],
        answer: 1
    },
    {
        question: "Saturated fats differ from unsaturated fats in that saturated fats ________.",
        options: [
            "Contain double bonds in fatty acid chains",
            "Are solid at room temperature",
            "Contain fewer hydrogen atoms",
            "Are usually found in plants"
        ],
        answer: 1
    },
    {
        question: "The bond between fatty acids and glycerol in lipids is called a ________.",
        options: ["Glycosidic bond", "Peptide bond", "Ester bond", "Hydrogen bond"],
        answer: 2
    },
    {
        question: "Phospholipids are important components of ________.",
        options: ["Plant cell walls", "Cell membranes", "Chromosomes", "Ribosomes"],
        answer: 1
    },
    {
        question: "In phospholipids, the hydrophilic head contains ________.",
        options: ["Fatty acids", "Glycerol only", "A phosphate group", "A carboxyl group"],
        answer: 2
    },
    {
        question: "Steroids are characterized by ________.",
        options: [
            "Long fatty acid chains",
            "Four carbon rings",
            "A peptide structure",
            "Glycosidic linkages"
        ],
        answer: 1
    },
    {
        question: "Cholesterol is an example of a ________.",
        options: ["Phospholipid", "Steroid", "Fatty acid", "Wax"],
        answer: 1
    },
    {
        question: "Which of the following is not a type of lipid?",
        options: ["Fats", "Phospholipids", "Steroids", "Cellulose"],
        answer: 3
    },
    {
        question: "One biological function of lipids is ________.",
        options: [
            "Speeding up reactions",
            "Storing energy",
            "Transmitting nerve impulses",
            "Carrying oxygen"
        ],
        answer: 1
    },
    {
        question: "Unsaturated fats are usually ________.",
        options: [
            "Solid at room temperature",
            "Found in animal products",
            "Liquid at room temperature",
            "Lacking double bonds"
        ],
        answer: 2
    },

    // Proteins (Q95-Q110)
    {
        question: "Proteins are composed of subunits called ________.",
        options: ["Fatty acids", "Amino acids", "Sugars", "Nucleotides"],
        answer: 1
    },
    {
        question: "The bond that links amino acids together in a protein is called a ________.",
        options: ["Glycosidic bond", "Peptide bond", "Ester bond", "Ionic bond"],
        answer: 1
    },
    {
        question: "How many different amino acids are commonly found in proteins?",
        options: ["10", "20", "64", "100"],
        answer: 1
    },
    {
        question: "The sequence of amino acids in a protein is known as the ________ structure.",
        options: ["Secondary", "Tertiary", "Quaternary", "Primary"],
        answer: 3
    },
    {
        question: "The alpha-helix and beta-pleated sheet are examples of ________ structure.",
        options: ["Primary", "Secondary", "Tertiary", "Quaternary"],
        answer: 1
    },
    {
        question: "The overall three-dimensional shape of a single polypeptide chain is its ________ structure.",
        options: ["Primary", "Secondary", "Tertiary", "Quaternary"],
        answer: 2
    },
    {
        question: "The combination of multiple polypeptide chains forms a ________ structure.",
        options: ["Tertiary", "Secondary", "Quaternary", "Primary"],
        answer: 2
    },
    {
        question: "The bond responsible for protein folding (like hydrogen bonds, disulfide bridges) occurs mainly in which structure level?",
        options: ["Primary", "Secondary and tertiary", "Only tertiary", "Quaternary only"],
        answer: 1
    },
    {
        question: "Denaturation of proteins involves ________.",
        options: [
            "Breaking peptide bonds",
            "Altering the protein’s shape and function",
            "Increasing peptide synthesis",
            "Making new amino acids"
        ],
        answer: 1
    },
    {
        question: "The specific region of an enzyme that binds the substrate is called the ________.",
        options: ["Active site", "Catalytic site", "Binding groove", "Reactive zone"],
        answer: 0
    },
    {
        question: "The element always present in proteins but not in carbohydrates or lipids is ________.",
        options: ["Oxygen", "Nitrogen", "Carbon", "Hydrogen"],
        answer: 1
    },
    {
        question: "A change in one amino acid in hemoglobin results in which disease?",
        options: ["Malaria", "Sickle cell anemia", "Diabetes", "Thalassemia"],
        answer: 1
    },

    // Water (Q41-Q60)
    {
        question: "Water can exist naturally in how many physical states?",
        options: ["One", "Two", "Three", "Four"],
        answer: 2
    },
    {
        question: "The chemical formula of water is ________.",
        options: ["HO₂", "H₂O", "H₃O", "OH"],
        answer: 1
    },
    {
        question: "The type of bond that joins two hydrogen atoms to one oxygen atom in water is a ________.",
        options: ["Ionic bond", "Covalent bond", "Hydrogen bond", "Peptide bond"],
        answer: 1
    },
    {
        question: "The weak attraction between a slightly positive hydrogen atom and a slightly negative atom in another molecule is called a ________.",
        options: ["Ionic bond", "Peptide bond", "Hydrogen bond", "Metallic bond"],
        answer: 2
    },
    {
        question: "Cohesion in water molecules is mainly due to ________.",
        options: ["Ionic attraction", "Hydrogen bonding", "Covalent bonding", "Van der Waals forces"],
        answer: 1
    },
    {
        question: "Adhesion refers to ________.",
        options: [
            "Attraction between similar molecules",
            "Attraction between different kinds of molecules",
            "Repulsion between molecules",
            "Movement of molecules"
        ],
        answer: 1
    },
    {
        question: "Surface tension in water results from ________.",
        options: ["Ionic bonding", "Cohesion among water molecules", "Adhesion to glass", "Lack of hydrogen bonds"],
        answer: 1
    },
    {
        question: "Water is often called the “solvent of life” because ________.",
        options: [
            "It dissolves many substances",
            "It is a solid",
            "It cannot dissolve any solutes",
            "It reacts with all molecules"
        ],
        answer: 0
    },
    {
        question: "The solution in which water is the solvent is called an ________.",
        options: ["Ionic solution", "Polar solution", "Aqueous solution", "Organic solution"],
        answer: 2
    },
    {
        question: "The sphere of water molecules around a dissolved ion is called a ________.",
        options: ["Hydration shell", "Polar shell", "Ionic cage", "Solute shell"],
        answer: 0
    },
    {
        question: "Hydrophobic substances are ________.",
        options: ["Water-loving", "Ionic compounds", "Water-fearing", "Completely soluble in water"],
        answer: 2
    },
    {
        question: "Living organisms are composed of approximately what percentage of water?",
        options: ["10–20%", "25–40%", "70–95%", "100%"],
        answer: 2
    },
    {
        question: "The product of [H⁺] and [OH⁻] concentrations in pure water equals ________.",
        options: ["10⁻¹⁴", "10⁻⁷", "10⁷", "14"],
        answer: 0
    },
    {
        question: "If a solution has [H⁺] = 10⁻³ M, its [OH⁻] concentration is ________.",
        options: ["10⁻¹⁴ M", "10⁻¹¹ M", "10⁻³ M", "10³ M"],
        answer: 1
    },
    {
        question: "The pH of a neutral solution is ________.",
        options: ["0", "3", "7", "14"],
        answer: 2
    },
    {
        question: "Substances that increase [H⁺] concentration in a solution are called ________.",
        options: ["Bases", "Buffers", "Acids", "Salts"],
        answer: 2
    },
    {
        question: "The pH scale is a measure of ________.",
        options: [
            "Salt concentration",
            "Hydrogen ion concentration",
            "Oxygen ion concentration",
            "Ionic strength"
        ],
        answer: 1
    },
    {
        question: "Buffers resist changes in pH by ________.",
        options: [
            "Accepting or donating H⁺ ions",
            "Removing water molecules",
            "Adding acids only",
            "Evaporating H₂O"
        ],
        answer: 0
    },
    {
        question: "Acid precipitation refers to rain with pH ________.",
        options: ["Above 7", "Below 5.6", "Equal to 7", "Between 8 and 9"],
        answer: 1
    },
    {
        question: "Burning of fossil fuels produces gases that cause acid rain such as ________.",
        options: [
            "Nitrogen and sulfur oxides",
            "Carbon and hydrogen gases",
            "Ammonia and methane",
            "Oxygen and nitrogen"
        ],
        answer: 0
    },

    // Matter & Macromolecules (Q61-Q80)
    {
        question: "Matter is defined as ________.",
        options: [
            "Anything that occupies space and has mass",
            "Energy without mass",
            "Atoms without electrons",
            "Compounds only"
        ],
        answer: 0
    },
    {
        question: "Elements consist of only ________.",
        options: ["One kind of atom", "Many kinds of molecules", "Different compounds", "Mixed ions"],
        answer: 0
    },
    {
        question: "An organic compound always contains ________.",
        options: ["Sodium", "Carbon", "Nitrogen", "Phosphorus"],
        answer: 1
    },
    {
        question: "The four major classes of macromolecules include all except:",
        options: ["Carbohydrates", "Proteins", "Nucleic acids", "Minerals"],
        answer: 3
    },
    {
        question: "Functional groups determine ________ of a molecule.",
        options: ["The atomic number", "The chemical behavior", "The weight", "The color"],
        answer: 1
    },
    {
        question: "The ─OH group is called a ________.",
        options: ["Carbonyl group", "Hydroxyl group", "Carboxyl group", "Amino group"],
        answer: 1
    },
    {
        question: "Compounds containing ─COOH are known as ________.",
        options: ["Amines", "Alcohols", "Carboxylic acids", "Thiols"],
        answer: 2
    },
    {
        question: "A molecule with ─NH₂ functional group belongs to which class?",
        options: ["Alcohols", "Amines", "Ketones", "Acids"],
        answer: 1
    },
    {
        question: "Polymers are made up of small repeating units called ________.",
        options: ["Atoms", "Monomers", "Bonds", "Chains"],
        answer: 1
    },
    {
        question: "The reaction that joins monomers to form polymers by removing water is called ________.",
        options: ["Hydrolysis", "Condensation (dehydration synthesis)", "Oxidation", "Ionization"],
        answer: 1
    },
    {
        question: "Breaking polymers into monomers using water is known as ________.",
        options: ["Condensation", "Hydrolysis", "Reduction", "Synthesis"],
        answer: 1
    },
    {
        question: "Which of the following is not a macromolecule?",
        options: ["Protein", "Lipid", "Carbohydrate", "Salt"],
        answer: 3
    },
    {
        question: "Carbohydrates contain which three elements?",
        options: ["C, H, O", "C, H, N", "H, O, P", "C, N, P"],
        answer: 0
    },
    {
        question: "The chemical formula for glucose is ________.",
        options: ["C₆H₁₂O₆", "C₅H₁₀O₅", "CH₂O", "C₇H₁₄O₇"],
        answer: 0
    },
    {
        question: "Monosaccharides are ________.",
        options: ["Simple sugars", "Double sugars", "Polymers", "Non-carbohydrates"],
        answer: 0
    },
    {
        question: "The bond joining two monosaccharides to form a disaccharide is a ________.",
        options: ["Peptide bond", "Ester bond", "Glycosidic bond", "Hydrogen bond"],
        answer: 2
    },
    {
        question: "Starch and glycogen are examples of ________.",
        options: [
            "Monosaccharides",
            "Disaccharides",
            "Storage polysaccharides",
            "Structural polysaccharides"
        ],
        answer: 2
    },
    {
        question: "Cellulose and chitin are examples of ________.",
        options: [
            "Storage polysaccharides",
            "Structural polysaccharides",
            "Disaccharides",
            "Sugars with no function"
        ],
        answer: 1
    },
    {
        question: "The main structural carbohydrate in plant cell walls is ________.",
        options: ["Glycogen", "Cellulose", "Starch", "Chitin"],
        answer: 1
    },

    // Properties of Life & Classification (Q1-Q40)
    {
        question: "Which of the following is not a property of life?",
        options: ["Energy processing", "Reproduction", "Movement", "Regulation"],
        answer: 2
    },
    {
        question: "The cell is considered the ________.",
        options: [
            "Largest structural unit of an organism",
            "Basic unit of life",
            "Smallest organelle",
            "Part of a molecule"
        ],
        answer: 1
    },
    {
        question: "Which level of biological organization includes all living and nonliving components of a particular area?",
        options: ["Community", "Ecosystem", "Population", "Biosphere"],
        answer: 1
    },
    {
        question: "Emergent properties arise as a result of ________.",
        options: [
            "Decreasing complexity",
            "Increasing complexity at each level of hierarchy",
            "Simple repetition of structures",
            "Random chemical reactions"
        ],
        answer: 1
    },
    {
        question: "Which feature is common to all organisms?",
        options: ["Made of cells", "Ability to photosynthesize", "Multicellular structure", "Having nervous system"],
        answer: 0
    },
    {
        question: "Prokaryotic cells lack ________.",
        options: ["Ribosomes", "DNA", "A nucleus", "A plasma membrane"],
        answer: 2
    },
    {
        question: "Eukaryotic cells have DNA enclosed in a ________.",
        options: ["Cell wall", "Ribosome", "Nucleus", "Vacuole"],
        answer: 2
    },
    {
        question: "The hierarchy of biological classification includes how many major taxonomic ranks?",
        options: ["Six", "Seven", "Eight", "Ten"],
        answer: 2
    },
    {
        question: "The correct order of taxonomic ranks from broadest to most specific is:",
        options: [
            "Species → Genus → Family → Order",
            "Order → Class → Phylum → Kingdom",
            "Domain → Kingdom → Phylum → Class",
            "Family → Order → Class → Phylum"
        ],
        answer: 2
    },
    {
        question: "The correct binomial name format is:",
        options: ["HOMO SAPIENS", "homo sapiens", "Homo Sapiens", "Homo sapiens"],
        answer: 3
    },
    {
        question: "The term “species” refers to organisms that ________.",
        options: [
            "Have the same appearance",
            "Can interbreed and produce fertile offspring",
            "Live in the same environment",
            "Have the same genus"
        ],
        answer: 1
    },
    {
        question: "The three domains of life are:",
        options: [
            "Monera, Protista, Plantae",
            "Archaea, Bacteria, Eukarya",
            "Fungi, Plantae, Animalia",
            "Eukarya, Protista, Monera"
        ],
        answer: 1
    },
    {
        question: "In binomial nomenclature, the first part of the name refers to the ________.",
        options: ["Species", "Family", "Genus", "Kingdom"],
        answer: 2
    },
    {
        question: "Which of the following kingdoms consists of prokaryotic unicellular organisms?",
        options: ["Protista", "Fungi", "Plantae", "Monera"],
        answer: 3
    },
    {
        question: "Fungi obtain their food by ________.",
        options: ["Photosynthesis", "Ingestion", "Absorption of nutrients", "Filtration"],
        answer: 2
    },
    {
        question: "Protists such as Paramecium are generally ________.",
        options: ["Multicellular", "Unicellular", "Non-living", "Prokaryotic"],
        answer: 1
    },
    {
        question: "Dinoflagellates are known for causing ________.",
        options: ["Green tides", "Blue tides", "Red tides", "Algal blooms without color"],
        answer: 2
    },
    {
        question: "The organism Plasmodium belongs to which group?",
        options: ["Flagellates", "Amoebas", "Apicomplexans", "Algae"],
        answer: 2
    },
    {
        question: "Fungal cell walls are made of ________.",
        options: ["Cellulose", "Chitin", "Peptidoglycan", "Lignin"],
        answer: 1
    },
    {
        question: "Yeast is an example of a ________.",
        options: ["Multicellular fungus", "Unicellular fungus", "Plant-like fungus", "Bacterial spore"],
        answer: 1
    },
    {
        question: "The mutualistic association between fungi and plant roots is called ________.",
        options: ["Lichen", "Mycorrhizae", "Symbiosis", "Mutualism"],
        answer: 1
    },
    {
        question: "Lichen is a combination of a fungus and a ________.",
        options: ["Virus", "Plant root", "Photosynthetic microorganism", "Protozoan"],
        answer: 2
    },
    {
        question: "The first antibiotic discovered, penicillin, was produced by the fungus ________.",
        options: ["Aspergillus", "Rhizopus", "Penicillium", "Saccharomyces"],
        answer: 2
    },
    {
        question: "Plants are ________ because they produce their own food through photosynthesis.",
        options: ["Heterotrophs", "Autotrophs", "Decomposers", "Parasites"],
        answer: 1
    },
    {
        question: "Which of the following is not a characteristic of animals?",
        options: ["Multicellular", "Rigid cell walls", "Heterotrophic", "Eukaryotic"],
        answer: 1
    },
    {
        question: "Biodiversity refers to ________.",
        options: [
            "The variety of different ecosystems only",
            "The variety of organisms in the world",
            "Only animal diversity",
            "The number of extinct species"
        ],
        answer: 1
    },
    {
        question: "Which of the following is not one of the three main levels of biodiversity?",
        options: ["Genetic", "Species", "Ecosystem", "Geological"],
        answer: 3
    },
    {
        question: "A species that has no living members is called ________.",
        options: ["Endangered", "Extinct", "Threatened", "At risk"],
        answer: 1
    },
    {
        question: "Ecosystem services include all except:",
        options: [
            "Purification of air and water",
            "Detoxification of wastes",
            "Production of fossil fuels",
            "Nutrient cycling"
        ],
        answer: 2
    },
    {
        question: "The greatest current threat to biodiversity is ________.",
        options: ["Climate change", "Habitat destruction", "Overexploitation", "Disease"],
        answer: 1
    },
    {
        question: "Which activity is an example of habitat destruction?",
        options: ["Urban development", "Biological control", "Cloud formation", "Migration"],
        answer: 0
    },
    {
        question: "Introduced species often cause problems because they ________.",
        options: ["Die quickly", "Disrupt the new ecosystem", "Provide nutrients", "Are easily controlled"],
        answer: 1
    },
    {
        question: "Overexploitation means ________.",
        options: [
            "Harvesting at rates higher than the population can recover",
            "Producing excess food",
            "Conservation through breeding",
            "Hunting only for research"
        ],
        answer: 0
    },
    {
        question: "The Arabian leopard and oryx became rare mainly due to ________.",
        options: ["Disease", "Hunting", "Pollution", "Invasive plants"],
        answer: 1
    },
    {
        question: "Which invasive species in Oman damages date fruits?",
        options: ["Prosopis juliflora", "Ring-necked parakeet", "Camel", "Arabian wolf"],
        answer: 1
    },
    {
        question: "Prosopis juliflora is considered harmful because ________.",
        options: [
            "It provides food for native goats",
            "It prevents native plants from growing",
            "It improves soil fertility",
            "It is edible to all animals"
        ],
        answer: 1
    },
    {
        question: "Conservation biology focuses on ________.",
        options: [
            "Classifying species",
            "Protecting species, habitats, and ecosystems",
            "Producing new species",
            "Genetic modification"
        ],
        answer: 1
    },
    {
        question: "Restoration ecology aims to ________.",
        options: [
            "Degrade natural ecosystems",
            "Return ecosystems to a natural state",
            "Introduce new species",
            "Create artificial habitats"
        ],
        answer: 1
    },
    {
        question: "The diversity of life on Earth shows ________ at the same time.",
        options: ["Unity and diversity", "Simplicity and destruction", "Mutation and extinction", "Isolation and competition"],
        answer: 0
    },
    {
        question: "The unity of life is evident in the fact that all living things ________.",
        options: ["Use oxygen", "Are made of cells", "Are multicellular", "Have identical DNA"],
        answer: 1
    }
];


// --- LOGIC FOR TEST BANK (test_bank.html) ---

let currentBankQuestionIndex = 0;

function initTestBank() {
    // DOM elements for Test Bank
    const questionTextEl = document.getElementById('question-text');
    const optionsContainerEl = document.getElementById('options-container');
    const nextButton = document.getElementById('next-btn');

    if (!questionTextEl) return; // Only run this logic on test_bank.html

    nextButton.addEventListener('click', () => {
        currentBankQuestionIndex++;
        if (currentBankQuestionIndex < allQuestions.length) {
            loadBankQuestion();
        } else {
            // Loop back to the beginning
            currentBankQuestionIndex = 0;
            loadBankQuestion();
            // Or, show completion message:
            // questionTextEl.innerText = "You have completed the test bank!";
            // optionsContainerEl.innerHTML = "";
            // nextButton.style.display = 'none';
        }
    });

    function loadBankQuestion() {
        nextButton.style.display = 'none'; // Hide next button until answer is selected
        const currentQuestion = allQuestions[currentBankQuestionIndex];
        
        questionTextEl.innerText = currentQuestion.question;
        optionsContainerEl.innerHTML = ""; // Clear old options
        optionsContainerEl.classList.remove('disabled'); // Re-enable clicks

        currentQuestion.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.innerText = option;
            optionElement.classList.add('option');
            optionElement.dataset.index = index;

            optionElement.addEventListener('click', selectBankAnswer);
            optionsContainerEl.appendChild(optionElement);
        });
    }

    function selectBankAnswer(e) {
        const selectedOption = e.target;
        const selectedIndex = parseInt(selectedOption.dataset.index);
        const correctIndex = allQuestions[currentBankQuestionIndex].answer;

        if (selectedIndex === correctIndex) {
            selectedOption.classList.add('correct');
        } else {
            selectedOption.classList.add('wrong');
            // Also show the correct one
            optionsContainerEl.children[correctIndex].classList.add('correct');
        }

        // Disable all options
        optionsContainerEl.classList.add('disabled');
        Array.from(optionsContainerEl.children).forEach(child => {
            child.classList.add('disabled');
        });

        // Show the next button
        nextButton.style.display = 'inline-block';
    }

    // Initial load
    loadBankQuestion();
}


// --- LOGIC FOR TIMED TEST (test.html) ---

let testQuestions = [];
let userAnswers = []; // This will be populated on submit
let timerInterval;
let timeRemaining = 3600; // 60 minutes in seconds

function initTest() {
    // DOM elements for Timed Test
    const quizContainer = document.getElementById('quiz-container');
    const resultsContainer = document.getElementById('results-container');
    const timerEl = document.getElementById('timer');
    const testFormContainer = document.getElementById('test-form-container');
    const submitButton = document.getElementById('submit-btn');
    const tryAgainButton = document.getElementById('try-again-btn');
    const finalScoreEl = document.getElementById('final-score');
    const reviewSectionEl = document.getElementById('review-section');

    if (!quizContainer) return; // Only run this logic on test.html

    function startTest() {
        // Reset state
        testQuestions = [];
        userAnswers = [];
        timeRemaining = 3600;
        
        // Hide results, show quiz
        quizContainer.classList.remove('hidden');
        resultsContainer.classList.add('hidden');
        reviewSectionEl.innerHTML = "";
        testFormContainer.innerHTML = ""; // Clear old test

        // Shuffle and pick 40 questions
        const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
        testQuestions = shuffled.slice(0, 40);

        buildTestForm();
        startTimer();
    }

    function startTimer() {
        clearInterval(timerInterval); // Clear any existing timer
        
        timerEl.innerText = `Time: 60:00`; // Reset display
        
        timerInterval = setInterval(() => {
            timeRemaining--;
            const minutes = Math.floor(timeRemaining / 60);
            const seconds = timeRemaining % 60;
            timerEl.innerText = `Time: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

            if (timeRemaining <= 0) {
                clearInterval(timerInterval);
                submitTest(); // Auto-submit if time runs out
            }
        }, 1000);
    }
    
    function buildTestForm() {
        let formHTML = "";
        testQuestions.forEach((question, questionIndex) => {
            formHTML += `<div class="test-question-block">`;
            // This line adds the numbering 1, 2, 3...
            formHTML += `<h3>${questionIndex + 1}. ${question.question}</h3>`; 
            
            question.options.forEach((option, optionIndex) => {
                formHTML += `<label class="test-option-label">`;
                formHTML += `<input type="radio" name="question${questionIndex}" value="${optionIndex}">`;
                formHTML += `${option}`;
                formHTML += `</label>`;
            });
            
            formHTML += `</div>`;
        });
        testFormContainer.innerHTML = formHTML;
    }


    function submitTest() {
        clearInterval(timerInterval); // Stop the timer

        // --- Grade the Test ---
        userAnswers = []; // Clear previous answers
        let score = 0;
        
        for(let i = 0; i < testQuestions.length; i++) {
            const correctAnswer = testQuestions[i].answer;
            const selectedRadio = document.querySelector(`input[name="question${i}"]:checked`);
            
            let userAnswer = null;
            if (selectedRadio) {
                userAnswer = parseInt(selectedRadio.value);
                if (userAnswer === correctAnswer) {
                    score++;
                }
            }
            userAnswers.push(userAnswer); // Push null if unanswered
        }
        // --- End Grading ---

        // Hide quiz, show results
        quizContainer.classList.add('hidden');
        resultsContainer.classList.remove('hidden');


        const percentage = ((score / 40) * 100).toFixed(1);
        finalScoreEl.innerText = `Your Score: ${score} / 40 (${percentage}%)`;

        // Generate review
        generateReview();
    }

    function generateReview() {
        reviewSectionEl.innerHTML = ""; // Clear old review
        
        testQuestions.forEach((question, index) => {
            const reviewBlock = document.createElement('div');
            reviewBlock.classList.add('review-question');

            let questionHTML = `<h3>${index + 1}. ${question.question}</h3>`;
            questionHTML += `<div class="options-grid">`;

            const userAnswer = userAnswers[index];
            const correctAnswer = question.answer;

            question.options.forEach((option, optIndex) => {
                let optionClass = 'option disabled';
                
                if (optIndex === correctAnswer) {
                    optionClass += ' correct'; // Always show the correct answer in green
                } else if (optIndex === userAnswer && userAnswer !== correctAnswer) {
                    optionClass += ' wrong'; // Show user's wrong answer in red
                }

                questionHTML += `<div class="${optionClass}">${option}</div>`;
            });
            
            questionHTML += `</div>`;
            reviewBlock.innerHTML = questionHTML;
            reviewSectionEl.appendChild(reviewBlock);
        });
    }

    // Event Listeners
    submitButton.addEventListener('click', () => {
        // Confirm before submitting
        if (confirm("Are you sure you want to submit your test?")) {
            submitTest();
        }
    });
    tryAgainButton.addEventListener('click', startTest);

    // Initial call to start the test
    startTest();
}