const NearbyList = [
  {
    id: 'n1',
    category: 'House',
    houseName: '79 Park Drive East Drive',
    address: 'Flushing, New York 11367',
    buildingArea: 3212,
    info: {
      garages: 2,
      bed: 2,
      bathroom: 1
    },
    monthlyCost: {
      total: 1120,
      principal: 840,
      tax: 224,
      insurance: 56
    },
    owner: {
      name: 'Andrew Cano',
      rating: 4.8
    },
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1775&q=80',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1775&q=80',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
    ]
  },
  {
    id: 'n2',
    category: 'Townhouse',
    houseName: '132 Lander Ave',
    address: 'Staten Island, New York 10314',
    buildingArea: 900,
    info: {
      garages: 1,
      bed: 2,
      bathroom: 2
    },
    monthlyCost: {
      total: 1120,
      principal: 840,
      tax: 224,
      insurance: 56
    },
    owner: {
      name: 'Andrew Cano',
      rating: 4.8
    },
    images: [
      'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      'https://images.unsplash.com/photo-1599427303058-f04cbcf4756f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80'
    ]
  },
  {
    id: 'n3',
    category: 'House',
    houseName: '79 Park Drive East Drive',
    address: 'Flushing, New York 11367',
    buildingArea: 3212,
    info: {
      garages: 2,
      bed: 2,
      bathroom: 1
    },
    monthlyCost: {
      total: 1120,
      principal: 840,
      tax: 224,
      insurance: 56
    },
    owner: {
      name: 'Andrew Cano',
      rating: 4.8
    },
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1775&q=80',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
    ]
  },
  {
    id: 'n4',
    category: 'Townhouse',
    houseName: '132 Lander Ave',
    address: 'Staten Island, New York 10314',
    buildingArea: 900,
    info: {
      garages: 1,
      bed: 2,
      bathroom: 2
    },
    monthlyCost: {
      total: 1120,
      principal: 840,
      tax: 224,
      insurance: 56
    },
    owner: {
      name: 'Andrew Cano',
      rating: 4.8
    },
    images: [
      'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      'https://images.unsplash.com/photo-1599427303058-f04cbcf4756f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80'
    ]
  },
  {
    id: 'n5',
    category: 'Townhouse',
    houseName: '132 Lander Ave',
    address: 'Staten Island, New York 10314',
    buildingArea: 900,
    info: {
      garages: 1,
      bed: 2,
      bathroom: 2
    },
    monthlyCost: {
      total: 1120,
      principal: 840,
      tax: 224,
      insurance: 56
    },
    owner: {
      name: 'Andrew Cano',
      rating: 4.8
    },
    images: [
      'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      'https://images.unsplash.com/photo-1599427303058-f04cbcf4756f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80'
    ]
  },
  {
    id: 'n6',
    category: 'Townhouse',
    houseName: '132 Lander Ave',
    address: 'Staten Island, New York 10314',
    buildingArea: 900,
    info: {
      garages: 1,
      bed: 2,
      bathroom: 2
    },
    monthlyCost: {
      total: 1120,
      principal: 840,
      tax: 224,
      insurance: 56
    },
    owner: {
      name: 'Andrew Cano',
      rating: 4.8
    },
    images: [
      'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      'https://images.unsplash.com/photo-1599427303058-f04cbcf4756f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80'
    ]
  },
  {
    id: 'n7',
    category: 'Townhouse',
    houseName: '132 Lander Ave',
    address: 'Staten Island, New York 10314',
    buildingArea: 900,
    info: {
      garages: 1,
      bed: 2,
      bathroom: 2
    },
    monthlyCost: {
      total: 1120,
      principal: 840,
      tax: 224,
      insurance: 56
    },
    owner: {
      name: 'Andrew Cano',
      rating: 4.8
    },
    images: [
      'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      'https://images.unsplash.com/photo-1599427303058-f04cbcf4756f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80'
    ]
  },
  {
    id: 'n8',
    category: 'Townhouse',
    houseName: '132 Lander Ave',
    address: 'Staten Island, New York 10314',
    buildingArea: 900,
    info: {
      garages: 1,
      bed: 2,
      bathroom: 2
    },
    monthlyCost: {
      total: 1120,
      principal: 840,
      tax: 224,
      insurance: 56
    },
    owner: {
      name: 'Andrew Cano',
      rating: 4.8
    },
    images: [
      'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
      'https://images.unsplash.com/photo-1599427303058-f04cbcf4756f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80'
    ]
  }
]

export { NearbyList }
