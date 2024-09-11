// Molarity Calculation
function calculateMolarity() {
    const moles = parseFloat(document.getElementById('moles').value);
    const volume = parseFloat(document.getElementById('volume').value);
    if (moles && volume && volume > 0) {
        const molarity = moles / volume;
        document.getElementById('molarityResult').innerText = `Molarity: ${molarity.toFixed(2)} M`;
    } else {
        document.getElementById('molarityResult').innerText = 'Please enter valid numbers.';
    }
}

// Molality Calculation
function calculateMolality() {
    const moles = parseFloat(document.getElementById('molalityMoles').value);
    const solventMass = parseFloat(document.getElementById('solventMass').value);
    if (moles && solventMass && solventMass > 0) {
        const molality = moles / solventMass;
        document.getElementById('molalityResult').innerText = `Molality: ${molality.toFixed(2)} m`;
    } else {
        document.getElementById('molalityResult').innerText = 'Please enter valid numbers.';
    }
}

// Percentage of Elements in a Compound
function calculatePercentage() {
    const elementMass = parseFloat(document.getElementById('elementMass').value);
    const compoundMass = parseFloat(document.getElementById('compoundMass').value);
    if (elementMass && compoundMass && compoundMass > 0) {
        const percentage = (elementMass / compoundMass) * 100;
        document.getElementById('percentageResult').innerText = `Percentage: ${percentage.toFixed(2)}%`;
    } else {
        document.getElementById('percentageResult').innerText = 'Please enter valid numbers.';
    }
}

// d-Orbital Geometry Prediction
function predictGeometry() {
    const ligandNumber = parseInt(document.getElementById('ligandNumber').value);
    let geometry = '';
    if (ligandNumber === 4) {
        geometry = 'Tetrahedral';
    } else if (ligandNumber === 6) {
        geometry = 'Octahedral';
    } else if (ligandNumber === 2) {
        geometry = 'Linear';
    } else {
        geometry = 'Unknown Geometry';
    }
    document.getElementById('geometryResult').innerText = `Predicted Geometry: ${geometry}`;
}
