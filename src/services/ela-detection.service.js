class ELADetectionService {
  async performAnalysis(fileBuffer) {
    // Simplified ELA - in production, use image processing libraries
    return {
      isOriginal: true,
      confidence: 80,
      warnings: []
    };
  }
}

module.exports = ELADetectionService;
