export const events= [
    {
      id: 0,
      title: 'All Day Event very long title',
      allDay: true,
      start: new Date(2019, 3, 0),
      end: new Date(2019, 3, 1),
    },
    {
      id: 1,
      title: 'Long Event',
      start: new Date(2019, 3, 7),
      end: new Date(2019, 3, 10),
    },
    
    {
      id: 2,
      title: 'DTS STARTS',
      start: new Date(2016, 2, 13, 0, 0, 0),
      end: new Date(2016, 2, 20, 0, 0, 0),
    },
    
    {
      id: 3,
      title: 'DTS ENDS',
      start: new Date(2016, 10, 6, 0, 0, 0),
      end: new Date(2016, 10, 13, 0, 0, 0),
    },
    
    {
      id: 4,
      title: 'Some Event',
      start: new Date(2019, 3, 9, 0, 0, 0),
      end: new Date(2019, 3, 10, 0, 0, 0),
    },
    {
      id: 5,
      title: 'Conference',
      start: new Date(2019, 3, 11),
      end: new Date(2019, 3, 13),
      desc: 'Big conference for important people',
    },
    {
      id: 6,
      title: 'Meeting',
      start: new Date(2019, 3, 12, 10, 30, 0, 0),
      end: new Date(2019, 3, 12, 12, 30, 0, 0),
      desc: 'Pre-meeting meeting, to prepare for the meeting',
    },
    {
      id: 7,
      title: 'Lunch',
      start: new Date(2019, 3, 12, 12, 0, 0, 0),
      end: new Date(2019, 3, 12, 13, 0, 0, 0),
      desc: 'Power lunch',
    },
    {
      id: 8,
      title: 'Meeting',
      start: new Date(2019, 3, 12, 14, 0, 0, 0),
      end: new Date(2019, 3, 12, 15, 0, 0, 0),
    },
    {
      id: 9,
      title: 'Happy Hour',
      start: new Date(2019, 3, 12, 17, 0, 0, 0),
      end: new Date(2019, 3, 12, 17, 30, 0, 0),
      desc: 'Most important meal of the day',
    },
    {
      id: 10,
      title: 'Dinner',
      start: new Date(2019, 3, 12, 20, 0, 0, 0),
      end: new Date(2019, 3, 12, 21, 0, 0, 0),
    },
    {
      id: 11,
      title: 'Birthday Party',
      start: new Date(2019, 3, 13, 7, 0, 0),
      end: new Date(2019, 3, 13, 10, 30, 0),
    },
    {
      id: 12,
      title: 'Late Night Event',
      start: new Date(2019, 3, 17, 19, 30, 0),
      end: new Date(2019, 3, 18, 2, 0, 0),
    },
    {
      id: 12.5,
      title: 'Late Same Night Event',
      start: new Date(2019, 3, 17, 19, 30, 0),
      end: new Date(2019, 3, 17, 23, 30, 0),
    },
    {
      id: 13,
      title: 'Multi-day Event',
      start: new Date(2019, 3, 20, 19, 30, 0),
      end: new Date(2019, 3, 22, 2, 0, 0),
    },
    {
      id: 14,
      title: 'Today',
      start: new Date(new Date().setHours(new Date().getHours() - 3)),
      end: new Date(new Date().setHours(new Date().getHours() + 3)),
    },
    {
      id: 15,
      title: 'Point in Time Event',
      start: new Date(new Date().setHours(new Date().getHours() - 3)),
      end: new Date(new Date().setHours(new Date().getHours() + 3)),
    },
    {
      id: 16,
      title: 'Video Record',
      start: new Date(2019, 3, 14, 15, 30, 0),
      end: new Date(2019, 3, 14, 19, 0, 0),
    },
    {
      id: 17,
      title: 'Dutch Song Producing',
      start: new Date(2019, 3, 14, 16, 30, 0),
      end: new Date(2019, 3, 14, 20, 0, 0),
    },
    {
      id: 18,
      title: 'Itaewon Halloween Meeting',
      start: new Date(2019, 3, 14, 16, 30, 0),
      end: new Date(2019, 3, 14, 17, 30, 0),
    },
    {
      id: 19,
      title: 'Online Coding Test',
      start: new Date(2019, 3, 14, 17, 30, 0),
      end: new Date(2019, 3, 14, 20, 30, 0),
    },
    {
      id: 20,
      title: 'An overlapped Event',
      start: new Date(2019, 3, 14, 17, 0, 0),
      end: new Date(2019, 3, 14, 18, 30, 0),
    },
    {
      id: 21,
      title: 'Phone Interview',
      start: new Date(2019, 3, 14, 17, 0, 0),
      end: new Date(2019, 3, 14, 18, 30, 0),
    },
    {
      id: 22,
      title: 'Cooking Class',
      start: new Date(2019, 3, 14, 17, 30, 0),
      end: new Date(2019, 3, 14, 19, 0, 0),
    },
    {
      id: 23,
      title: 'Go to the gym',
      start: new Date(2019, 3, 14, 18, 30, 0),
      end: new Date(2019, 3, 14, 20, 0, 0),
    },
    ]

export const constacCardData =[
  {
    name:'Robert Hammer',
    imageUrl:require('../asset/images/sm/avatar1.jpg')
  },
  {
    name:'Orlando Lentz',
    imageUrl:require('../asset/images/sm/avatar2.jpg')
  },
  {
    name:'Barbara Kelly',
    imageUrl:require('../asset/images/sm/avatar3.jpg')
  },
  {
    name:'Brian Swader',
    imageUrl:require('../asset/images/sm/avatar4.jpg')
  },
  {
    name:'Robert Hammer',
    imageUrl:require('../asset/images/sm/avatar5.jpg')
  },
  {
    name:'Frank Camly',
    imageUrl:require('../asset/images/sm/avatar1.jpg')
  },
  {
    name:'Rose Rivera',
    imageUrl:require('../asset/images/sm/avatar2.jpg')
  }
]

export const blogsparkleCardData =[
  {
    heading:'LIKES',
    height:50,
  money:'22,500',
  perText:4,
  icon:"fa fa-thumbs-o-up",
  sparklineData:{
      type: 'line',
      data:[2,3,1,5,4,2,3,1,5,4,7,8,2,3,1,4,6,4,4,7,8,2,3,1,4,6],
      areaStyle:{
        color: "#59C4BC",
      },
      itemStyle: {
          color: "#fff",
      },
      symbolSize: 1,
    }
  },
  {heading:'COMMENTS',
  height:50,
  money:'500',
  icon:"fa fa-comment",
  perText:11,
  sparklineData:{
      type: 'line',
      data:[7,8,2,3,1,4,6,2,3,1,5,4,7,8,2,3,1,4,6,4,4,2,3,1,5,4,5,4,4],
      areaStyle:{
        color: "#637AAE",
      },
      itemStyle: {
          color: "#fff",
      },
      symbolSize: 1,
    }

  },
  {heading:'SHARE',
  height:50,
  money:'2,215',
  icon:"fa fa-share-alt",
  perText:9,
  sparklineData:{
      type: 'line',
      data:[2,3,1,5,4,7,8,2,3,1,5,6,4,4,2,3,1,5,4,7,8,2,3,1,4,6,5,4,4],
      areaStyle:{
        color: "#84d4a6",
      },
      itemStyle: {
          color: "#fff",
      },
      symbolSize: 1,
    }
  },
  {heading:'VIEW',
  height:50,
  money:'4,21,415',
  icon:"fa fa-eye",
  perText:2,
  sparklineData:{
      type: 'line',
      data:[2,3,1,5,4,7,8,2,3,1,5,6,4,4,2,3,1,5,4,7,8,2,3,1,4,6,5,4,4],
      areaStyle:{
        color: "#efc26b",
      },
      itemStyle: {
          color: "#fff",
      },
      symbolSize: 1,
    }
  },
]

export const blogPieCardData =[
  {
    heading:'Twitter',
    per:56,
    value:66,
    color:'rgb(76, 175, 80)'
  },
  {
    heading:'Facebook',
    per:87,
    value:26,
    color:'rgb(123, 105, 236)'
  },
  {
    heading:'Instagram',
    per:16,
    value:76,
    color:'rgb(249, 189, 83)'
  },
  {
    heading:'Google +',
    per:37,
    value:76,
    color:'rgb(249, 189, 83)'
  }
]

export const blogListMainCardData = [
  {
    imageUrl:require('../asset/images/blog/blog-page-1.jpg')
  },
  {
    imageUrl:require('../asset/images/blog/blog-page-2.jpg')
  },
  {
    imageUrl:require('../asset/images/blog/blog-page-3.jpg')
  },
  {
    imageUrl:require('../asset/images/blog/blog-page-4.jpg')
  }
]

export const fmFolderCardData = [
  {
    name:"Iconinc Project"
  },
  {
    name:"Themeforest"
  },
  {
    name:"New Website"
  },
  {
    name:"My Folder"
  }
]

export const FmDetailsStorageCardData = [
  {
    name:'Documents',
    usedSpace:'2',
    per:18,
    color:'blue'
  },
  {
    name:'Media',
    usedSpace:'10',
    per:34,
    color:'purple'
  },
  {
    name:'Images',
    usedSpace:'20',
    per:67,
    color:'green'
  }
]

export const FmDocumentsCardData =[
  {
    name:'Document_2019.doc',
    icon:'fa fa-file text-info',
    size:'42',
    date:'Nov 02, 2019'
  },
  {
    name:'Document_2019.doc',
    icon:'fa fa-file text-info',
    size:'89',
    date:'Nov 02, 2019'
  },
  {
    name:'Document_2019.doc',
    icon:'fa fa-file text-info',
    size:'89',
    date:'Aug 15, 2019'
  },
  {
    name:'Report2018.xls',
    icon:'fa fa-bar-chart text-warning',
    size:'48',
    date:'Dec 12, 2019'
  },
  {
    name:'Report2018.xls',
    icon:'fa fa-bar-chart text-warning',
    size:'48',
    date:'Dec 12, 2019'
  },
  {
    name:'asdf  hhkj.pdf',
    icon:'fa fa-file text-success',
    size:'48',
    date:'Aug 18, 2019'
  },
  {
    name:'asdf  hhkj.pdf',
    icon:'fa fa-file text-success',
    size:'48',
    date:'Aug 18, 2019'
  },
  {
    name:'asdf  hhkj.pdf',
    icon:'fa fa-file text-success',
    size:'48',
    date:'Aug 18, 2019'
  },
  {
    name:'asdf  hhkj.pdf',
    icon:'fa fa-file text-success',
    size:'48',
    date:'Aug 18, 2019'
  },
  {
    name:'Report2018.xls',
    icon:'fa fa-bar-chart text-warning',
    size:'48',
    date:'Dec 12, 2019'
  },
  {
    name:'Report2018.xls',
    icon:'fa fa-bar-chart text-warning',
    size:'48',
    date:'Dec 12, 2019'
  },
  {
    name:'Report2018.xls',
    icon:'fa fa-bar-chart text-warning',
    size:'48',
    date:'Dec 12, 2019'
  },
  {
    name:'Document_2019.doc',
    icon:'fa fa-file text-info',
    size:'42',
    date:'Nov 02, 2019'
  },
  {
    name:'Document_2019.doc',
    icon:'fa fa-file text-info',
    size:'42',
    date:'Nov 02, 2019'
  },
  {
    name:'Report2018.xls',
    icon:'fa fa-bar-chart text-warning',
    size:'48',
    date:'Dec 12, 2019'
  },
  {
    name:'Document_2019.doc',
    icon:'fa fa-file text-info',
    size:'42',
    date:'Nov 02, 2019'
  }
]

export const fileMediaCardData =[
  {
    name:'hellonew.mkv',
    icon:'fa fa-image',
    size:'720',
    date:'Dec 08, 2017'
  },
  {
    name:'Jee Le Zara Song.mpg4',
    icon:'fa fa-youtube-square text-danger',
    size:'32',
    date:'Oct 11, 2016'
  },
  {
    name:'hellonew.mkv',
    icon:'fa fa-image',
    size:'720',
    date:'Dec 08, 2017'
  },
  {
    name:'hellonew.mkv',
    icon:'fa fa-image',
    size:'720',
    date:'Dec 08, 2017'
  },
  {
    name:'Jee Le Zara Song.mpg4',
    icon:'fa fa-youtube-square text-danger',
    size:'32',
    date:'Oct 11, 2016'
  },
  {
    name:'Jee Le Zara Song.mpg4',
    icon:'fa fa-youtube-square text-danger',
    size:'32',
    date:'Oct 11, 2016'
  },
  {
    name:'hellonew.mkv',
    icon:'fa fa-image',
    size:'720',
    date:'Dec 08, 2017'
  },
  {
    name:'Jee Le Zara Song.mpg4',
    icon:'fa fa-youtube-square text-danger',
    size:'32',
    date:'Oct 11, 2016'
  },
]

export const FileImagesCardData =[
  {
    imageUrl:require("../asset/images/image-gallery/5.jpg")
  },
  {
    imageUrl:require("../asset/images/image-gallery/8.jpg")
  },
  {
    imageUrl:require("../asset/images/image-gallery/9.jpg")
  },
  {
    imageUrl:require("../asset/images/image-gallery/3.jpg")
  },
  {
    imageUrl:require("../asset/images/image-gallery/4.jpg")
  },
  {
    imageUrl:require("../asset/images/image-gallery/1.jpg")
  },
  {
    imageUrl:require("../asset/images/image-gallery/2.jpg")
  },
  {
    imageUrl:require("../asset/images/image-gallery/9.jpg")
  },
  {
    imageUrl:require("../asset/images/image-gallery/10.jpg")
  },
  {
    imageUrl:require("../asset/images/image-gallery/11.jpg")
  },
  {
    imageUrl:require("../asset/images/image-gallery/12.jpg")
  },
  {
    imageUrl:require("../asset/images/image-gallery/13.jpg")
  },
  {
    imageUrl:require("../asset/images/image-gallery/14.jpg")
  },
  {
    imageUrl:require("../asset/images/image-gallery/15.jpg")
  }
]