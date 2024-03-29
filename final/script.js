(function(){
    var script = {
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.Button_485BFF41_598E_3DB2_41A9_33F36E014467], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); if(!this.get('fullscreenAvailable')) { [this.Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A].forEach(function(component) { component.set('visible', false); }) }",
 "children": [
  "this.MainViewer",
  "this.Container_0C5F33A8_3BA0_A6FF_41C3_2A6652E2CE94",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC"
 ],
 "height": "100%",
 "id": "rootPlayer",
 "paddingLeft": 0,
 "width": "100%",
 "class": "Player",
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "visible",
 "minHeight": 20,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "backgroundPreloadEnabled": true,
 "verticalAlign": "top",
 "buttonToggleMute": "this.Button_4C5C0864_5A8E_C472_41C4_7C0748488A41",
 "definitions": [{
 "thumbnailUrl": "media/panorama_61ED06C2_7030_0BED_41DA_62A6B0B3CB98_t.jpg",
 "label": "RND",
 "id": "panorama_61ED06C2_7030_0BED_41DA_62A6B0B3CB98",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_61ED06C2_7030_0BED_41DA_62A6B0B3CB98_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_61ED06C2_7030_0BED_41DA_62A6B0B3CB98_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_61ED06C2_7030_0BED_41DA_62A6B0B3CB98_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_61ED06C2_7030_0BED_41DA_62A6B0B3CB98_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_61ED06C2_7030_0BED_41DA_62A6B0B3CB98_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_61ED06C2_7030_0BED_41DA_62A6B0B3CB98_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_61ED06C2_7030_0BED_41DA_62A6B0B3CB98_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_61ED06C2_7030_0BED_41DA_62A6B0B3CB98_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_61ED06C2_7030_0BED_41DA_62A6B0B3CB98_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_61ED06C2_7030_0BED_41DA_62A6B0B3CB98_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_61ED06C2_7030_0BED_41DA_62A6B0B3CB98_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_61ED06C2_7030_0BED_41DA_62A6B0B3CB98_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_61ED06C2_7030_0BED_41DA_62A6B0B3CB98_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_61ED06C2_7030_0BED_41DA_62A6B0B3CB98_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_61ED06C2_7030_0BED_41DA_62A6B0B3CB98_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_61ED06C2_7030_0BED_41DA_62A6B0B3CB98_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_61ED06C2_7030_0BED_41DA_62A6B0B3CB98_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_61ED06C2_7030_0BED_41DA_62A6B0B3CB98_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_61ED06C2_7030_0BED_41DA_62A6B0B3CB98_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_61ED06C2_7030_0BED_41DA_62A6B0B3CB98_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_61ED06C2_7030_0BED_41DA_62A6B0B3CB98_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_614FCB21_7030_3AAF_41D1_43AC52AA330E",
   "backwardYaw": 137.05,
   "yaw": 4.76,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_61E53F0E_7030_1A72_41D2_A1A6F5E13379",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 63.42,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_5A5559B7_7033_F992_41DA_D9C4432A2AEE",
  "this.overlay_5D11CBDF_7030_1993_41CE_A7DEBE337CBF",
  "this.overlay_5CF352D7_7030_0B93_41D7_8CFDBDA7E3E5",
  "this.overlay_5C75C146_7050_06F5_41D3_4CBBAF89DBC8"
 ],
 "pitch": 10.81,
 "hfov": 360,
 "partial": false
},
{
 "buttonToggleHotspots": "this.Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA",
 "mouseControlMode": "drag_acceleration",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "class": "PanoramaPlayer",
 "buttonToggleGyroscope": "this.Button_485BFF41_598E_3DB2_41A9_33F36E014467",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonCardboardView": "this.Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation"
},
{
 "thumbnailUrl": "media/panorama_614FCB21_7030_3AAF_41D1_43AC52AA330E_t.jpg",
 "partial": false,
 "label": "rnd (2)",
 "id": "panorama_614FCB21_7030_3AAF_41D1_43AC52AA330E",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_614FCB21_7030_3AAF_41D1_43AC52AA330E_t.jpg",
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_614FCB21_7030_3AAF_41D1_43AC52AA330E_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_614FCB21_7030_3AAF_41D1_43AC52AA330E_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_614FCB21_7030_3AAF_41D1_43AC52AA330E_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_614FCB21_7030_3AAF_41D1_43AC52AA330E_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_614FCB21_7030_3AAF_41D1_43AC52AA330E_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_614FCB21_7030_3AAF_41D1_43AC52AA330E_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_614FCB21_7030_3AAF_41D1_43AC52AA330E_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_614FCB21_7030_3AAF_41D1_43AC52AA330E_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_614FCB21_7030_3AAF_41D1_43AC52AA330E_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_614FCB21_7030_3AAF_41D1_43AC52AA330E_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_614FCB21_7030_3AAF_41D1_43AC52AA330E_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_614FCB21_7030_3AAF_41D1_43AC52AA330E_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_614FCB21_7030_3AAF_41D1_43AC52AA330E_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_614FCB21_7030_3AAF_41D1_43AC52AA330E_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_614FCB21_7030_3AAF_41D1_43AC52AA330E_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_614FCB21_7030_3AAF_41D1_43AC52AA330E_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_614CF27D_7030_0A96_41C6_06C52E134CF9",
   "backwardYaw": 89.7,
   "yaw": -104.36,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_614CF795_7030_0997_41B3_3DD2AB366E34",
   "backwardYaw": -151.32,
   "yaw": -17.25,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_614CBB82_7030_FA72_41DB_3593A530EE19",
   "backwardYaw": 10.55,
   "yaw": -76.05,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_61ED06C2_7030_0BED_41DA_62A6B0B3CB98",
   "backwardYaw": 4.76,
   "yaw": 137.05,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 62.94,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_5A913671_7030_0AAF_41D7_C1D92CA1CD13",
  "this.overlay_5AFA0348_7030_0AFD_41D1_9081EDE2EF98",
  "this.overlay_5A1014F0_7030_0FAE_41D7_B80FA3514B5F",
  "this.overlay_5D2DDB65_7030_1AB7_41B3_DEC96AF84BD4"
 ],
 "pitch": 3.69,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 179.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4832D861_71D0_06AE_41B3_7D74117C380C",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 103.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_40177B50_71D0_3AEE_41BB_71BD0A0591E7",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_6113C3EE_7030_09B2_41D5_FB75B3986836_t.jpg",
 "label": "entrance",
 "id": "panorama_6113C3EE_7030_09B2_41D5_FB75B3986836",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_6113C3EE_7030_09B2_41D5_FB75B3986836_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_6113C3EE_7030_09B2_41D5_FB75B3986836_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6113C3EE_7030_09B2_41D5_FB75B3986836_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6113C3EE_7030_09B2_41D5_FB75B3986836_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6113C3EE_7030_09B2_41D5_FB75B3986836_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_6113C3EE_7030_09B2_41D5_FB75B3986836_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6113C3EE_7030_09B2_41D5_FB75B3986836_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6113C3EE_7030_09B2_41D5_FB75B3986836_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6113C3EE_7030_09B2_41D5_FB75B3986836_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_6113C3EE_7030_09B2_41D5_FB75B3986836_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6113C3EE_7030_09B2_41D5_FB75B3986836_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6113C3EE_7030_09B2_41D5_FB75B3986836_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6113C3EE_7030_09B2_41D5_FB75B3986836_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_6113C3EE_7030_09B2_41D5_FB75B3986836_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6113C3EE_7030_09B2_41D5_FB75B3986836_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6113C3EE_7030_09B2_41D5_FB75B3986836_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6113C3EE_7030_09B2_41D5_FB75B3986836_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_6113C3EE_7030_09B2_41D5_FB75B3986836_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6113C3EE_7030_09B2_41D5_FB75B3986836_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6113C3EE_7030_09B2_41D5_FB75B3986836_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6113C3EE_7030_09B2_41D5_FB75B3986836_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_6406AE10_70D0_3A6D_4196_BC641A174A02",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 62.08,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_647081C1_70D0_09EF_41D2_8BB160DA1111",
  "this.overlay_6C7D13CA_70F0_09FD_41C4_7F925C015940",
  "this.overlay_5FCDD1DD_7070_0997_41BB_240A816B38BE"
 ],
 "pitch": 5.88,
 "hfov": 360,
 "partial": false
},
{
 "thumbnailUrl": "media/panorama_614CBDF2_7030_7992_41C2_BB897AB5B1C7_t.jpg",
 "partial": false,
 "label": "c'",
 "id": "panorama_614CBDF2_7030_7992_41C2_BB897AB5B1C7",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_614CBDF2_7030_7992_41C2_BB897AB5B1C7_t.jpg",
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_614CBDF2_7030_7992_41C2_BB897AB5B1C7_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_614CBDF2_7030_7992_41C2_BB897AB5B1C7_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_614CBDF2_7030_7992_41C2_BB897AB5B1C7_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_614CBDF2_7030_7992_41C2_BB897AB5B1C7_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_614CBDF2_7030_7992_41C2_BB897AB5B1C7_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_614CBDF2_7030_7992_41C2_BB897AB5B1C7_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_614CBDF2_7030_7992_41C2_BB897AB5B1C7_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_614CBDF2_7030_7992_41C2_BB897AB5B1C7_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_614CBDF2_7030_7992_41C2_BB897AB5B1C7_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_614CBDF2_7030_7992_41C2_BB897AB5B1C7_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_614CBDF2_7030_7992_41C2_BB897AB5B1C7_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_614CBDF2_7030_7992_41C2_BB897AB5B1C7_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_614CBDF2_7030_7992_41C2_BB897AB5B1C7_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_614CBDF2_7030_7992_41C2_BB897AB5B1C7_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_614CBDF2_7030_7992_41C2_BB897AB5B1C7_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_614CBDF2_7030_7992_41C2_BB897AB5B1C7_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_614CBDF2_7030_7992_41C2_BB897AB5B1C7_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_614CBDF2_7030_7992_41C2_BB897AB5B1C7_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_614CBDF2_7030_7992_41C2_BB897AB5B1C7_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_614CBDF2_7030_7992_41C2_BB897AB5B1C7_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_612604C0_7030_0FEE_41D9_370EBC10496C",
   "backwardYaw": 72.29,
   "yaw": 13.48,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_614CF27D_7030_0A96_41C6_06C52E134CF9",
   "backwardYaw": -178.39,
   "yaw": 89.21,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 64.83,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_54A62C38_70F1_FE9E_41D5_45540BB73580",
  "this.overlay_51B09374_70F0_0A95_41D9_BE07F43BE18E"
 ],
 "pitch": -3.39,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -2.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_489498CF_71D0_07F3_41D2_09F941FA740A",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -0.44,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_48C9C90D_71D0_0676_41BB_AAB39EE9FCEA",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_61D1159C_7030_0995_4184_9A9B9431557C_t.jpg",
 "label": "lib_8",
 "id": "panorama_61D1159C_7030_0995_4184_9A9B9431557C",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_61D1159C_7030_0995_4184_9A9B9431557C_t.jpg",
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_61D1159C_7030_0995_4184_9A9B9431557C_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_61D1159C_7030_0995_4184_9A9B9431557C_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_61D1159C_7030_0995_4184_9A9B9431557C_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_61D1159C_7030_0995_4184_9A9B9431557C_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_61D1159C_7030_0995_4184_9A9B9431557C_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_61D1159C_7030_0995_4184_9A9B9431557C_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_61D1159C_7030_0995_4184_9A9B9431557C_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_61D1159C_7030_0995_4184_9A9B9431557C_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_61D1159C_7030_0995_4184_9A9B9431557C_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_61D1159C_7030_0995_4184_9A9B9431557C_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_61D1159C_7030_0995_4184_9A9B9431557C_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_61D1159C_7030_0995_4184_9A9B9431557C_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_61D1159C_7030_0995_4184_9A9B9431557C_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_61D1159C_7030_0995_4184_9A9B9431557C_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_61D1159C_7030_0995_4184_9A9B9431557C_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_61D1159C_7030_0995_4184_9A9B9431557C_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_61D13DF1_7030_39AE_41D3_EAD082CFA389",
   "backwardYaw": 179.56,
   "yaw": 83.84,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_614C1ABF_7030_1B92_41A9_03DA8BEB1A71",
   "backwardYaw": -92.99,
   "yaw": -3.74,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_6406AE10_70D0_3A6D_4196_BC641A174A02",
   "backwardYaw": -3.21,
   "yaw": 177.8,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 62.31,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_5E87AA79_71D0_3A9F_41A0_9C434967793F",
  "this.overlay_42523059_71D0_069E_41BC_DB8A24785A81",
  "this.overlay_4690BB06_71D0_1A72_41D3_74905429FA1B"
 ],
 "pitch": 1.93,
 "hfov": 360,
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_66A04E04_70D0_1A76_41AA_92879A22AB62_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_61EDD171_7030_06AF_41D3_42DC820009C2_t.jpg",
 "partial": false,
 "label": "eee (5)",
 "id": "panorama_61EDD171_7030_06AF_41D3_42DC820009C2",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_61EDD171_7030_06AF_41D3_42DC820009C2_t.jpg",
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_61EDD171_7030_06AF_41D3_42DC820009C2_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_61EDD171_7030_06AF_41D3_42DC820009C2_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_61EDD171_7030_06AF_41D3_42DC820009C2_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_61EDD171_7030_06AF_41D3_42DC820009C2_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_61EDD171_7030_06AF_41D3_42DC820009C2_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_61EDD171_7030_06AF_41D3_42DC820009C2_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_61EDD171_7030_06AF_41D3_42DC820009C2_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_61EDD171_7030_06AF_41D3_42DC820009C2_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_61EDD171_7030_06AF_41D3_42DC820009C2_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_61EDD171_7030_06AF_41D3_42DC820009C2_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_61EDD171_7030_06AF_41D3_42DC820009C2_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_61EDD171_7030_06AF_41D3_42DC820009C2_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_61EDD171_7030_06AF_41D3_42DC820009C2_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_61EDD171_7030_06AF_41D3_42DC820009C2_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_61EDD171_7030_06AF_41D3_42DC820009C2_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_61EDD171_7030_06AF_41D3_42DC820009C2_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_614CF795_7030_0997_41B3_3DD2AB366E34",
   "backwardYaw": -54.04,
   "yaw": 177.71,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_614CBB82_7030_FA72_41DB_3593A530EE19",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_614C1ABF_7030_1B92_41A9_03DA8BEB1A71",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 63.21,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_62750647_70D0_0AF2_41CC_E8163D83FEDC",
  "this.overlay_633D9B17_70D0_FA92_41DB_828B9CB938A0",
  "this.overlay_651A0520_70D0_0EAE_41CD_72BDC6208ADD"
 ],
 "pitch": -0.23,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_614C7114_7030_0695_41D4_F33CF326C756_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_61E6D356_7030_0A95_41B1_5F8087399D42_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_614CF27D_7030_0A96_41C6_06C52E134CF9_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "items": [
  {
   "media": "this.panorama_6113C3EE_7030_09B2_41D5_FB75B3986836",
   "camera": "this.panorama_6113C3EE_7030_09B2_41D5_FB75B3986836_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_622C1750_7030_0AED_41D9_3C3EECC85056",
   "camera": "this.panorama_622C1750_7030_0AED_41D9_3C3EECC85056_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_61E6D356_7030_0A95_41B1_5F8087399D42",
   "camera": "this.panorama_61E6D356_7030_0A95_41B1_5F8087399D42_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_614C5F4E_7030_1AF2_41C0_9F81F6E6026B",
   "camera": "this.panorama_614C5F4E_7030_1AF2_41C0_9F81F6E6026B_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_612604C0_7030_0FEE_41D9_370EBC10496C",
   "camera": "this.panorama_612604C0_7030_0FEE_41D9_370EBC10496C_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_614CBDF2_7030_7992_41C2_BB897AB5B1C7",
   "camera": "this.panorama_614CBDF2_7030_7992_41C2_BB897AB5B1C7_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_61F6A83C_7030_0695_41D8_64A6B2C7ED3A",
   "camera": "this.panorama_61F6A83C_7030_0695_41D8_64A6B2C7ED3A_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_614CF27D_7030_0A96_41C6_06C52E134CF9",
   "camera": "this.panorama_614CF27D_7030_0A96_41C6_06C52E134CF9_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_61D13DF1_7030_39AE_41D3_EAD082CFA389",
   "camera": "this.panorama_61D13DF1_7030_39AE_41D3_EAD082CFA389_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_614CF795_7030_0997_41B3_3DD2AB366E34",
   "camera": "this.panorama_614CF795_7030_0997_41B3_3DD2AB366E34_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_61EDD171_7030_06AF_41D3_42DC820009C2",
   "camera": "this.panorama_61EDD171_7030_06AF_41D3_42DC820009C2_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_614CBB82_7030_FA72_41DB_3593A530EE19",
   "camera": "this.panorama_614CBB82_7030_FA72_41DB_3593A530EE19_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_614C3E9D_7030_1B91_41D4_C05D72D3FEED",
   "camera": "this.panorama_614C3E9D_7030_1B91_41D4_C05D72D3FEED_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_6139B39E_7030_0992_41DA_91ABF75618D5",
   "camera": "this.panorama_6139B39E_7030_0992_41DA_91ABF75618D5_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_614C184B_7030_06F2_41B0_5AEEF26ADC0C",
   "camera": "this.panorama_614C184B_7030_06F2_41B0_5AEEF26ADC0C_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_61475CF9_7030_3F9E_41CF_6C4DB94AF166",
   "camera": "this.panorama_61475CF9_7030_3F9E_41CF_6C4DB94AF166_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_614C0184_7030_0676_41D8_E174B7CA6FBB",
   "camera": "this.panorama_614C0184_7030_0676_41D8_E174B7CA6FBB_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_6145C628_7030_0ABE_41A1_141AC146DDF2",
   "camera": "this.panorama_6145C628_7030_0ABE_41A1_141AC146DDF2_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_614C1ABF_7030_1B92_41A9_03DA8BEB1A71",
   "camera": "this.panorama_614C1ABF_7030_1B92_41A9_03DA8BEB1A71_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_61D1159C_7030_0995_4184_9A9B9431557C",
   "camera": "this.panorama_61D1159C_7030_0995_4184_9A9B9431557C_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_614C7114_7030_0695_41D4_F33CF326C756",
   "camera": "this.panorama_614C7114_7030_0695_41D4_F33CF326C756_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_61E53F0E_7030_1A72_41D2_A1A6F5E13379",
   "camera": "this.panorama_61E53F0E_7030_1A72_41D2_A1A6F5E13379_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_614FCB21_7030_3AAF_41D1_43AC52AA330E",
   "camera": "this.panorama_614FCB21_7030_3AAF_41D1_43AC52AA330E_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_61ED06C2_7030_0BED_41DA_62A6B0B3CB98",
   "camera": "this.panorama_61ED06C2_7030_0BED_41DA_62A6B0B3CB98_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_614C106B_7030_06B3_41D0_8DB05C9F0A0D",
   "camera": "this.panorama_614C106B_7030_06B3_41D0_8DB05C9F0A0D_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_6406AE10_70D0_3A6D_4196_BC641A174A02",
   "camera": "this.panorama_6406AE10_70D0_3A6D_4196_BC641A174A02_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_66A04E04_70D0_1A76_41AA_92879A22AB62",
   "camera": "this.panorama_66A04E04_70D0_1A76_41AA_92879A22AB62_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_671B230E_70D0_0A75_41BA_A6A37C518D6D",
   "camera": "this.panorama_671B230E_70D0_0A75_41BA_A6A37C518D6D_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_6710066B_70D0_0AB2_41DB_186ACDD84803",
   "camera": "this.panorama_6710066B_70D0_0AB2_41DB_186ACDD84803_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 28, 0)",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 162.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4884F8BF_71D0_0792_41CA_169B2D07CD6A",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_66A04E04_70D0_1A76_41AA_92879A22AB62_t.jpg",
 "label": "PXL_20220427_110709862.PANO",
 "id": "panorama_66A04E04_70D0_1A76_41AA_92879A22AB62",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_66A04E04_70D0_1A76_41AA_92879A22AB62_t.jpg",
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_66A04E04_70D0_1A76_41AA_92879A22AB62_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_66A04E04_70D0_1A76_41AA_92879A22AB62_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_66A04E04_70D0_1A76_41AA_92879A22AB62_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_66A04E04_70D0_1A76_41AA_92879A22AB62_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_66A04E04_70D0_1A76_41AA_92879A22AB62_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_66A04E04_70D0_1A76_41AA_92879A22AB62_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_66A04E04_70D0_1A76_41AA_92879A22AB62_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_66A04E04_70D0_1A76_41AA_92879A22AB62_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_66A04E04_70D0_1A76_41AA_92879A22AB62_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_66A04E04_70D0_1A76_41AA_92879A22AB62_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_66A04E04_70D0_1A76_41AA_92879A22AB62_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_66A04E04_70D0_1A76_41AA_92879A22AB62_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_66A04E04_70D0_1A76_41AA_92879A22AB62_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_66A04E04_70D0_1A76_41AA_92879A22AB62_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_66A04E04_70D0_1A76_41AA_92879A22AB62_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_66A04E04_70D0_1A76_41AA_92879A22AB62_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_614CF27D_7030_0A96_41C6_06C52E134CF9",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_671B230E_70D0_0A75_41BA_A6A37C518D6D",
   "backwardYaw": 55.22,
   "yaw": 23.52,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_6406AE10_70D0_3A6D_4196_BC641A174A02",
   "backwardYaw": 82.39,
   "yaw": -89.73,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 61.25,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_661BB2E7_70D0_0BB2_41DB_3B25B12B3D5A",
  "this.overlay_6986DAD1_70F0_1BEE_41CF_1481DBF94A7C",
  "this.overlay_69F945E6_70F0_09B2_41D9_AEEF586FF3E8"
 ],
 "pitch": -3.45,
 "hfov": 360,
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -124.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_49C147AB_71D0_09B2_419D_0D9AB58BE238",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_614CBDF2_7030_7992_41C2_BB897AB5B1C7_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_61E6D356_7030_0A95_41B1_5F8087399D42_t.jpg",
 "partial": false,
 "label": "busses",
 "id": "panorama_61E6D356_7030_0A95_41B1_5F8087399D42",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_61E6D356_7030_0A95_41B1_5F8087399D42_t.jpg",
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_61E6D356_7030_0A95_41B1_5F8087399D42_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_61E6D356_7030_0A95_41B1_5F8087399D42_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_61E6D356_7030_0A95_41B1_5F8087399D42_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_61E6D356_7030_0A95_41B1_5F8087399D42_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_61E6D356_7030_0A95_41B1_5F8087399D42_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_61E6D356_7030_0A95_41B1_5F8087399D42_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_61E6D356_7030_0A95_41B1_5F8087399D42_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_61E6D356_7030_0A95_41B1_5F8087399D42_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_61E6D356_7030_0A95_41B1_5F8087399D42_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_61E6D356_7030_0A95_41B1_5F8087399D42_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_61E6D356_7030_0A95_41B1_5F8087399D42_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_61E6D356_7030_0A95_41B1_5F8087399D42_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_61E6D356_7030_0A95_41B1_5F8087399D42_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_61E6D356_7030_0A95_41B1_5F8087399D42_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_61E6D356_7030_0A95_41B1_5F8087399D42_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_61E6D356_7030_0A95_41B1_5F8087399D42_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_61E6D356_7030_0A95_41B1_5F8087399D42_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_61E6D356_7030_0A95_41B1_5F8087399D42_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_61E6D356_7030_0A95_41B1_5F8087399D42_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_61E6D356_7030_0A95_41B1_5F8087399D42_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_622C1750_7030_0AED_41D9_3C3EECC85056",
   "backwardYaw": 104.15,
   "yaw": -1.53,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_614C106B_7030_06B3_41D0_8DB05C9F0A0D",
   "backwardYaw": 85.42,
   "yaw": -104.43,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 64.55,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_6EDA199F_70F0_F993_41B1_49E841735A54",
  "this.overlay_6E44DB93_70F0_1992_41D3_50C091116211"
 ],
 "pitch": -5.01,
 "hfov": 360
},
{
 "thumbnailUrl": "media/panorama_622C1750_7030_0AED_41D9_3C3EECC85056_t.jpg",
 "partial": false,
 "label": "bba_2",
 "id": "panorama_622C1750_7030_0AED_41D9_3C3EECC85056",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_622C1750_7030_0AED_41D9_3C3EECC85056_t.jpg",
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_622C1750_7030_0AED_41D9_3C3EECC85056_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_622C1750_7030_0AED_41D9_3C3EECC85056_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_622C1750_7030_0AED_41D9_3C3EECC85056_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_622C1750_7030_0AED_41D9_3C3EECC85056_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_622C1750_7030_0AED_41D9_3C3EECC85056_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_622C1750_7030_0AED_41D9_3C3EECC85056_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_622C1750_7030_0AED_41D9_3C3EECC85056_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_622C1750_7030_0AED_41D9_3C3EECC85056_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_622C1750_7030_0AED_41D9_3C3EECC85056_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_622C1750_7030_0AED_41D9_3C3EECC85056_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_622C1750_7030_0AED_41D9_3C3EECC85056_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_622C1750_7030_0AED_41D9_3C3EECC85056_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_622C1750_7030_0AED_41D9_3C3EECC85056_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_622C1750_7030_0AED_41D9_3C3EECC85056_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_622C1750_7030_0AED_41D9_3C3EECC85056_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_622C1750_7030_0AED_41D9_3C3EECC85056_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_622C1750_7030_0AED_41D9_3C3EECC85056_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_622C1750_7030_0AED_41D9_3C3EECC85056_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_622C1750_7030_0AED_41D9_3C3EECC85056_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_622C1750_7030_0AED_41D9_3C3EECC85056_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_61E6D356_7030_0A95_41B1_5F8087399D42",
   "backwardYaw": -1.53,
   "yaw": 104.15,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 64.63,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_6EBFD750_70F0_0AED_41D0_66F2BEBE8AF4"
 ],
 "pitch": -3.71,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 96.26,
  "class": "PanoramaCameraPosition",
  "pitch": -3.71
 },
 "id": "panorama_622C1750_7030_0AED_41D9_3C3EECC85056_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -166.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_48ABE8EE_71D0_07B2_41D4_6C57823FA760",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "items": [
  {
   "media": "this.panorama_6113C3EE_7030_09B2_41D5_FB75B3986836",
   "camera": "this.panorama_6113C3EE_7030_09B2_41D5_FB75B3986836_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_622C1750_7030_0AED_41D9_3C3EECC85056",
   "camera": "this.panorama_622C1750_7030_0AED_41D9_3C3EECC85056_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_61E6D356_7030_0A95_41B1_5F8087399D42",
   "camera": "this.panorama_61E6D356_7030_0A95_41B1_5F8087399D42_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_614C5F4E_7030_1AF2_41C0_9F81F6E6026B",
   "camera": "this.panorama_614C5F4E_7030_1AF2_41C0_9F81F6E6026B_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_612604C0_7030_0FEE_41D9_370EBC10496C",
   "camera": "this.panorama_612604C0_7030_0FEE_41D9_370EBC10496C_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_614CBDF2_7030_7992_41C2_BB897AB5B1C7",
   "camera": "this.panorama_614CBDF2_7030_7992_41C2_BB897AB5B1C7_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_61F6A83C_7030_0695_41D8_64A6B2C7ED3A",
   "camera": "this.panorama_61F6A83C_7030_0695_41D8_64A6B2C7ED3A_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_614CF27D_7030_0A96_41C6_06C52E134CF9",
   "camera": "this.panorama_614CF27D_7030_0A96_41C6_06C52E134CF9_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_61D13DF1_7030_39AE_41D3_EAD082CFA389",
   "camera": "this.panorama_61D13DF1_7030_39AE_41D3_EAD082CFA389_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_614CF795_7030_0997_41B3_3DD2AB366E34",
   "camera": "this.panorama_614CF795_7030_0997_41B3_3DD2AB366E34_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_61EDD171_7030_06AF_41D3_42DC820009C2",
   "camera": "this.panorama_61EDD171_7030_06AF_41D3_42DC820009C2_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_614CBB82_7030_FA72_41DB_3593A530EE19",
   "camera": "this.panorama_614CBB82_7030_FA72_41DB_3593A530EE19_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_614C3E9D_7030_1B91_41D4_C05D72D3FEED",
   "camera": "this.panorama_614C3E9D_7030_1B91_41D4_C05D72D3FEED_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_6139B39E_7030_0992_41DA_91ABF75618D5",
   "camera": "this.panorama_6139B39E_7030_0992_41DA_91ABF75618D5_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_614C184B_7030_06F2_41B0_5AEEF26ADC0C",
   "camera": "this.panorama_614C184B_7030_06F2_41B0_5AEEF26ADC0C_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_61475CF9_7030_3F9E_41CF_6C4DB94AF166",
   "camera": "this.panorama_61475CF9_7030_3F9E_41CF_6C4DB94AF166_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_614C0184_7030_0676_41D8_E174B7CA6FBB",
   "camera": "this.panorama_614C0184_7030_0676_41D8_E174B7CA6FBB_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_6145C628_7030_0ABE_41A1_141AC146DDF2",
   "camera": "this.panorama_6145C628_7030_0ABE_41A1_141AC146DDF2_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_614C1ABF_7030_1B92_41A9_03DA8BEB1A71",
   "camera": "this.panorama_614C1ABF_7030_1B92_41A9_03DA8BEB1A71_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_61D1159C_7030_0995_4184_9A9B9431557C",
   "camera": "this.panorama_61D1159C_7030_0995_4184_9A9B9431557C_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_614C7114_7030_0695_41D4_F33CF326C756",
   "camera": "this.panorama_614C7114_7030_0695_41D4_F33CF326C756_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_61E53F0E_7030_1A72_41D2_A1A6F5E13379",
   "camera": "this.panorama_61E53F0E_7030_1A72_41D2_A1A6F5E13379_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_614FCB21_7030_3AAF_41D1_43AC52AA330E",
   "camera": "this.panorama_614FCB21_7030_3AAF_41D1_43AC52AA330E_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_61ED06C2_7030_0BED_41DA_62A6B0B3CB98",
   "camera": "this.panorama_61ED06C2_7030_0BED_41DA_62A6B0B3CB98_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_614C106B_7030_06B3_41D0_8DB05C9F0A0D",
   "camera": "this.panorama_614C106B_7030_06B3_41D0_8DB05C9F0A0D_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_6406AE10_70D0_3A6D_4196_BC641A174A02",
   "camera": "this.panorama_6406AE10_70D0_3A6D_4196_BC641A174A02_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_66A04E04_70D0_1A76_41AA_92879A22AB62",
   "camera": "this.panorama_66A04E04_70D0_1A76_41AA_92879A22AB62_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_671B230E_70D0_0A75_41BA_A6A37C518D6D",
   "camera": "this.panorama_671B230E_70D0_0A75_41BA_A6A37C518D6D_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_6710066B_70D0_0AB2_41DB_186ACDD84803",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_6710066B_70D0_0AB2_41DB_186ACDD84803_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "thumbnailUrl": "media/panorama_612604C0_7030_0FEE_41D9_370EBC10496C_t.jpg",
 "label": "c",
 "id": "panorama_612604C0_7030_0FEE_41D9_370EBC10496C",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_612604C0_7030_0FEE_41D9_370EBC10496C_t.jpg",
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_612604C0_7030_0FEE_41D9_370EBC10496C_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_612604C0_7030_0FEE_41D9_370EBC10496C_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_612604C0_7030_0FEE_41D9_370EBC10496C_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_612604C0_7030_0FEE_41D9_370EBC10496C_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_612604C0_7030_0FEE_41D9_370EBC10496C_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_612604C0_7030_0FEE_41D9_370EBC10496C_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_612604C0_7030_0FEE_41D9_370EBC10496C_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_612604C0_7030_0FEE_41D9_370EBC10496C_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_612604C0_7030_0FEE_41D9_370EBC10496C_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_612604C0_7030_0FEE_41D9_370EBC10496C_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_612604C0_7030_0FEE_41D9_370EBC10496C_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_612604C0_7030_0FEE_41D9_370EBC10496C_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_612604C0_7030_0FEE_41D9_370EBC10496C_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_612604C0_7030_0FEE_41D9_370EBC10496C_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_612604C0_7030_0FEE_41D9_370EBC10496C_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_612604C0_7030_0FEE_41D9_370EBC10496C_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_614CBDF2_7030_7992_41C2_BB897AB5B1C7",
   "backwardYaw": 13.48,
   "yaw": 72.29,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_614C5F4E_7030_1AF2_41C0_9F81F6E6026B",
   "backwardYaw": -62.61,
   "yaw": 34.7,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 63.24,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_50EC341E_70F0_0E92_41C1_B4272549D4F6",
  "this.overlay_50F00E69_70F0_1ABF_41BB_85813D8137C5"
 ],
 "pitch": 2.4,
 "hfov": 360,
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_614CBB82_7030_FA72_41DB_3593A530EE19_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -42.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_400B0B02_71D0_3A6D_41C1_D0A4E0DEBDEB",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "shadowBlurRadius": 6,
 "id": "window_5E84BD6C_7050_1EB6_41CD_034317F630A8",
 "width": 200,
 "closeButtonBorderRadius": 11,
 "scrollBarWidth": 10,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyBackgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "headerBackgroundOpacity": 1,
 "minHeight": 20,
 "bodyPaddingLeft": 5,
 "modal": true,
 "titleTextDecoration": "none",
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "backgroundColorRatios": [],
 "headerVerticalAlign": "middle",
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "closeButtonIconWidth": 12,
 "paddingRight": 0,
 "headerBackgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "backgroundColor": [],
 "bodyPaddingBottom": 5,
 "title": "",
 "gap": 10,
 "closeButtonIconHeight": 12,
 "minWidth": 20,
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "shadowVerticalLength": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBorderSize": 0,
 "height": 200,
 "titlePaddingRight": 5,
 "titleFontColor": "#000000",
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "shadowSpread": 1,
 "paddingTop": 0,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.htmlText_5E868D6C_7050_1EB6_41D5_BBA1FA8C6CEA"
 ],
 "veilOpacity": 0.4,
 "veilColorDirection": "horizontal",
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "backgroundOpacity": 1,
 "shadow": true,
 "class": "Window",
 "layout": "vertical",
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#666699",
  "#DDDDDD",
  "#33FFFF",
  "#FFFFFF"
 ],
 "closeButtonIconLineWidth": 2,
 "bodyBackgroundOpacity": 1,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "footerHeight": 5,
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "titleFontWeight": "normal",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "titleFontSize": "1.29vmin",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0.29,
  0.5,
  0.6,
  1
 ],
 "horizontalAlign": "center",
 "closeButtonIconColor": "#000000",
 "titleFontStyle": "normal",
 "titleFontFamily": "Arial",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "shadowHorizontalLength": 3,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "data": {
  "name": "Window92434"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -107.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_498DC719_71D0_0A9E_41DC_426DEB78E728",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 78.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_49CE0796_71D0_0992_41CE_5A3C1A3F5F22",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 176.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_48EFC93C_71D0_0696_41C1_F35460849090",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_6710066B_70D0_0AB2_41DB_186ACDD84803_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -96.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_48504881_71D0_066F_41D7_F59637145447",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 90.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_40205B7F_71D0_3A93_41D0_3AF5555675F6",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_6710066B_70D0_0AB2_41DB_186ACDD84803_t.jpg",
 "label": "PXL_20220427_110328800.PANO",
 "id": "panorama_6710066B_70D0_0AB2_41DB_186ACDD84803",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_6710066B_70D0_0AB2_41DB_186ACDD84803_t.jpg",
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_6710066B_70D0_0AB2_41DB_186ACDD84803_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6710066B_70D0_0AB2_41DB_186ACDD84803_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6710066B_70D0_0AB2_41DB_186ACDD84803_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6710066B_70D0_0AB2_41DB_186ACDD84803_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_6710066B_70D0_0AB2_41DB_186ACDD84803_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6710066B_70D0_0AB2_41DB_186ACDD84803_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6710066B_70D0_0AB2_41DB_186ACDD84803_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6710066B_70D0_0AB2_41DB_186ACDD84803_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_6710066B_70D0_0AB2_41DB_186ACDD84803_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6710066B_70D0_0AB2_41DB_186ACDD84803_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6710066B_70D0_0AB2_41DB_186ACDD84803_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6710066B_70D0_0AB2_41DB_186ACDD84803_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_6710066B_70D0_0AB2_41DB_186ACDD84803_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6710066B_70D0_0AB2_41DB_186ACDD84803_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6710066B_70D0_0AB2_41DB_186ACDD84803_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6710066B_70D0_0AB2_41DB_186ACDD84803_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_671B230E_70D0_0A75_41BA_A6A37C518D6D",
   "backwardYaw": -93.59,
   "yaw": -0.11,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 63.09,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_6828EB06_70F0_1A75_41A9_45C6E34AE7CF"
 ],
 "pitch": -1.04,
 "hfov": 360,
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 90.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_482D6832_71D0_0692_41D8_581D80FF110A",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 82.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_487698AF_71D0_07B2_41D0_846CD34B5DCD",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_6139B39E_7030_0992_41DA_91ABF75618D5_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_614C1ABF_7030_1B92_41A9_03DA8BEB1A71_t.jpg",
 "partial": false,
 "label": "lib_7",
 "id": "panorama_614C1ABF_7030_1B92_41A9_03DA8BEB1A71",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_614C1ABF_7030_1B92_41A9_03DA8BEB1A71_t.jpg",
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_614C1ABF_7030_1B92_41A9_03DA8BEB1A71_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_614C1ABF_7030_1B92_41A9_03DA8BEB1A71_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_614C1ABF_7030_1B92_41A9_03DA8BEB1A71_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_614C1ABF_7030_1B92_41A9_03DA8BEB1A71_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_614C1ABF_7030_1B92_41A9_03DA8BEB1A71_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_614C1ABF_7030_1B92_41A9_03DA8BEB1A71_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_614C1ABF_7030_1B92_41A9_03DA8BEB1A71_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_614C1ABF_7030_1B92_41A9_03DA8BEB1A71_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_614C1ABF_7030_1B92_41A9_03DA8BEB1A71_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_614C1ABF_7030_1B92_41A9_03DA8BEB1A71_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_614C1ABF_7030_1B92_41A9_03DA8BEB1A71_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_614C1ABF_7030_1B92_41A9_03DA8BEB1A71_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_614C1ABF_7030_1B92_41A9_03DA8BEB1A71_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_614C1ABF_7030_1B92_41A9_03DA8BEB1A71_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_614C1ABF_7030_1B92_41A9_03DA8BEB1A71_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_614C1ABF_7030_1B92_41A9_03DA8BEB1A71_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_61D13DF1_7030_39AE_41D3_EAD082CFA389",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_614C7114_7030_0695_41D4_F33CF326C756",
   "backwardYaw": 0.72,
   "yaw": -89.11,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_61D1159C_7030_0995_4184_9A9B9431557C",
   "backwardYaw": -3.74,
   "yaw": -92.99,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 64.04,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_56FA5D2B_70D0_1EB2_418D_A3715769C54E",
  "this.overlay_5935939B_70D0_0993_41D9_14CC0F7FD8E2",
  "this.overlay_590511F5_70D0_0996_41A5_7740DB3304FD",
  "this.overlay_5D825AB1_7050_3BAE_41BF_28C2A719552B"
 ],
 "pitch": 0.29,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_614C1ABF_7030_1B92_41A9_03DA8BEB1A71_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -156.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_481A3823_71D0_06B3_41C2_8F2A5FC52AB6",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_614CF795_7030_0997_41B3_3DD2AB366E34_t.jpg",
 "partial": false,
 "label": "eee (4)",
 "id": "panorama_614CF795_7030_0997_41B3_3DD2AB366E34",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_614CF795_7030_0997_41B3_3DD2AB366E34_t.jpg",
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_614CF795_7030_0997_41B3_3DD2AB366E34_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_614CF795_7030_0997_41B3_3DD2AB366E34_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_614CF795_7030_0997_41B3_3DD2AB366E34_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_614CF795_7030_0997_41B3_3DD2AB366E34_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_614CF795_7030_0997_41B3_3DD2AB366E34_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_614CF795_7030_0997_41B3_3DD2AB366E34_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_614CF795_7030_0997_41B3_3DD2AB366E34_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_614CF795_7030_0997_41B3_3DD2AB366E34_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_614CF795_7030_0997_41B3_3DD2AB366E34_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_614CF795_7030_0997_41B3_3DD2AB366E34_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_614CF795_7030_0997_41B3_3DD2AB366E34_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_614CF795_7030_0997_41B3_3DD2AB366E34_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_614CF795_7030_0997_41B3_3DD2AB366E34_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_614CF795_7030_0997_41B3_3DD2AB366E34_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_614CF795_7030_0997_41B3_3DD2AB366E34_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_614CF795_7030_0997_41B3_3DD2AB366E34_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_614C106B_7030_06B3_41D0_8DB05C9F0A0D",
   "backwardYaw": -97.08,
   "yaw": 33.6,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_614FCB21_7030_3AAF_41D1_43AC52AA330E",
   "backwardYaw": -17.25,
   "yaw": -151.32,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_61EDD171_7030_06AF_41D3_42DC820009C2",
   "backwardYaw": 177.71,
   "yaw": -54.04,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 62.83,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_548673C6_70D0_09F5_41B0_8C2E0E2F6EEE",
  "this.overlay_5419BB20_70D0_7AAD_418D_BB028EAD5794",
  "this.overlay_55E71280_70D0_0A6E_41C7_5493E385D96E"
 ],
 "pitch": 0.74,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -94.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_400E8AE3_71D0_3BB3_41B2_A81434CFAFD5",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_61475CF9_7030_3F9E_41CF_6C4DB94AF166_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "shadowBlurRadius": 6,
 "id": "window_5F766B5F_7070_1A92_41BC_DEEDAA979277",
 "width": 600,
 "closeButtonBorderRadius": 11,
 "scrollBarWidth": 10,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyBackgroundColorDirection": "horizontal",
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "headerBackgroundOpacity": 1,
 "minHeight": 20,
 "bodyPaddingLeft": 5,
 "modal": true,
 "titleTextDecoration": "none",
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "backgroundColorRatios": [],
 "headerVerticalAlign": "middle",
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "closeButtonIconWidth": 12,
 "paddingRight": 0,
 "headerBackgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "backgroundColor": [],
 "bodyPaddingBottom": 5,
 "title": "",
 "gap": 10,
 "closeButtonIconHeight": 12,
 "minWidth": 20,
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "shadowVerticalLength": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBorderSize": 0,
 "height": 600,
 "titlePaddingRight": 5,
 "titleFontColor": "#000000",
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "shadowSpread": 1,
 "paddingTop": 0,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.htmlText_5F68DB5F_7070_1A92_41AF_C10857E71F89"
 ],
 "veilOpacity": 0.4,
 "veilColorDirection": "horizontal",
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "backgroundOpacity": 1,
 "shadow": true,
 "class": "Window",
 "layout": "vertical",
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FF3300",
  "#000000",
  "#000000"
 ],
 "closeButtonIconLineWidth": 2,
 "bodyBackgroundOpacity": 1,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "footerHeight": 5,
 "headerPaddingRight": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "titleFontWeight": "normal",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#000000",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "titleFontSize": "1.29vmin",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColorRatios": [
  0,
  0,
  0.76,
  0.98,
  1
 ],
 "horizontalAlign": "center",
 "closeButtonIconColor": "#000000",
 "titleFontStyle": "normal",
 "titleFontFamily": "Arial",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "shadowHorizontalLength": 3,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  0.42,
  1
 ],
 "data": {
  "name": "Window101190"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -54.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4840A871_71D0_06AE_41C7_AD25508813D6",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 178.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_402A0B6F_71D0_3AB2_41DB_E23ECFDD23F3",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_6406AE10_70D0_3A6D_4196_BC641A174A02_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_61F6A83C_7030_0695_41D8_64A6B2C7ED3A_t.jpg",
 "label": "civil",
 "id": "panorama_61F6A83C_7030_0695_41D8_64A6B2C7ED3A",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_61F6A83C_7030_0695_41D8_64A6B2C7ED3A_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_61F6A83C_7030_0695_41D8_64A6B2C7ED3A_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_61F6A83C_7030_0695_41D8_64A6B2C7ED3A_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_61F6A83C_7030_0695_41D8_64A6B2C7ED3A_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_61F6A83C_7030_0695_41D8_64A6B2C7ED3A_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_61F6A83C_7030_0695_41D8_64A6B2C7ED3A_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_61F6A83C_7030_0695_41D8_64A6B2C7ED3A_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_61F6A83C_7030_0695_41D8_64A6B2C7ED3A_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_61F6A83C_7030_0695_41D8_64A6B2C7ED3A_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_61F6A83C_7030_0695_41D8_64A6B2C7ED3A_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_61F6A83C_7030_0695_41D8_64A6B2C7ED3A_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_61F6A83C_7030_0695_41D8_64A6B2C7ED3A_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_61F6A83C_7030_0695_41D8_64A6B2C7ED3A_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_61F6A83C_7030_0695_41D8_64A6B2C7ED3A_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_61F6A83C_7030_0695_41D8_64A6B2C7ED3A_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_61F6A83C_7030_0695_41D8_64A6B2C7ED3A_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_61F6A83C_7030_0695_41D8_64A6B2C7ED3A_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_61F6A83C_7030_0695_41D8_64A6B2C7ED3A_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_61F6A83C_7030_0695_41D8_64A6B2C7ED3A_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_61F6A83C_7030_0695_41D8_64A6B2C7ED3A_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_61F6A83C_7030_0695_41D8_64A6B2C7ED3A_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_61E53F0E_7030_1A72_41D2_A1A6F5E13379",
   "backwardYaw": -101.33,
   "yaw": 71.24,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_614FCB21_7030_3AAF_41D1_43AC52AA330E",
   "class": "AdjacentPanorama"
  }
 ],
 "vfov": 63.28,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_52E55A47_70D0_3AF3_41A3_52603495779E",
  "this.overlay_5129C7D0_70D0_09EE_41C2_FEFAB3C6F275"
 ],
 "pitch": 4.85,
 "hfov": 360,
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -97.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_49D5C7B9_71D0_099F_4196_BDE3E2655717",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_6406AE10_70D0_3A6D_4196_BC641A174A02_t.jpg",
 "label": "PXL_20220427_111017417.PANO",
 "id": "panorama_6406AE10_70D0_3A6D_4196_BC641A174A02",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_6406AE10_70D0_3A6D_4196_BC641A174A02_t.jpg",
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_6406AE10_70D0_3A6D_4196_BC641A174A02_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6406AE10_70D0_3A6D_4196_BC641A174A02_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6406AE10_70D0_3A6D_4196_BC641A174A02_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6406AE10_70D0_3A6D_4196_BC641A174A02_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_6406AE10_70D0_3A6D_4196_BC641A174A02_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6406AE10_70D0_3A6D_4196_BC641A174A02_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6406AE10_70D0_3A6D_4196_BC641A174A02_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6406AE10_70D0_3A6D_4196_BC641A174A02_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_6406AE10_70D0_3A6D_4196_BC641A174A02_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6406AE10_70D0_3A6D_4196_BC641A174A02_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6406AE10_70D0_3A6D_4196_BC641A174A02_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6406AE10_70D0_3A6D_4196_BC641A174A02_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_6406AE10_70D0_3A6D_4196_BC641A174A02_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6406AE10_70D0_3A6D_4196_BC641A174A02_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6406AE10_70D0_3A6D_4196_BC641A174A02_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6406AE10_70D0_3A6D_4196_BC641A174A02_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_66A04E04_70D0_1A76_41AA_92879A22AB62",
   "backwardYaw": -89.73,
   "yaw": 82.39,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_61D1159C_7030_0995_4184_9A9B9431557C",
   "backwardYaw": 177.8,
   "yaw": -3.21,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 63.12,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_65B80AAF_70D0_1BB3_41D5_EA0568B9C702",
  "this.overlay_652339C3_70D0_79F3_41CF_C6D7006369B6"
 ],
 "pitch": 2.35,
 "hfov": 360,
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_6145C628_7030_0ABE_41A1_141AC146DDF2_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_61F6A83C_7030_0695_41D8_64A6B2C7ED3A_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 75.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_49F217F4_71D0_0996_41D5_29F2E10E29DB",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 28.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_49ACC758_71D0_0A9D_41BD_8AC75CB75E1E",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_671B230E_70D0_0A75_41BA_A6A37C518D6D_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_614CBB82_7030_FA72_41DB_3593A530EE19_t.jpg",
 "partial": false,
 "label": "EEE",
 "id": "panorama_614CBB82_7030_FA72_41DB_3593A530EE19",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_614CBB82_7030_FA72_41DB_3593A530EE19_t.jpg",
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_614CBB82_7030_FA72_41DB_3593A530EE19_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_614CBB82_7030_FA72_41DB_3593A530EE19_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_614CBB82_7030_FA72_41DB_3593A530EE19_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_614CBB82_7030_FA72_41DB_3593A530EE19_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_614CBB82_7030_FA72_41DB_3593A530EE19_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_614CBB82_7030_FA72_41DB_3593A530EE19_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_614CBB82_7030_FA72_41DB_3593A530EE19_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_614CBB82_7030_FA72_41DB_3593A530EE19_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_614CBB82_7030_FA72_41DB_3593A530EE19_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_614CBB82_7030_FA72_41DB_3593A530EE19_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_614CBB82_7030_FA72_41DB_3593A530EE19_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_614CBB82_7030_FA72_41DB_3593A530EE19_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_614CBB82_7030_FA72_41DB_3593A530EE19_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_614CBB82_7030_FA72_41DB_3593A530EE19_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_614CBB82_7030_FA72_41DB_3593A530EE19_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_614CBB82_7030_FA72_41DB_3593A530EE19_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_614CBB82_7030_FA72_41DB_3593A530EE19_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_614CBB82_7030_FA72_41DB_3593A530EE19_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_614CBB82_7030_FA72_41DB_3593A530EE19_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_614CBB82_7030_FA72_41DB_3593A530EE19_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_614FCB21_7030_3AAF_41D1_43AC52AA330E",
   "backwardYaw": -76.05,
   "yaw": 10.55,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_61D13DF1_7030_39AE_41D3_EAD082CFA389",
   "backwardYaw": -89.13,
   "yaw": 125.57,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 62.83,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_56C2A780_70D0_0A6E_41D3_CB9E770B57F3",
  "this.overlay_5AA390C1_70D0_07EF_41D1_28AC1B62B68C"
 ],
 "pitch": -7.18,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -75.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4B1DA96B_71D0_06B2_419C_A71D009B1782",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_671B230E_70D0_0A75_41BA_A6A37C518D6D_t.jpg",
 "label": "PXL_20220427_110522063.PANO",
 "id": "panorama_671B230E_70D0_0A75_41BA_A6A37C518D6D",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_671B230E_70D0_0A75_41BA_A6A37C518D6D_t.jpg",
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_671B230E_70D0_0A75_41BA_A6A37C518D6D_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_671B230E_70D0_0A75_41BA_A6A37C518D6D_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_671B230E_70D0_0A75_41BA_A6A37C518D6D_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_671B230E_70D0_0A75_41BA_A6A37C518D6D_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_671B230E_70D0_0A75_41BA_A6A37C518D6D_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_671B230E_70D0_0A75_41BA_A6A37C518D6D_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_671B230E_70D0_0A75_41BA_A6A37C518D6D_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_671B230E_70D0_0A75_41BA_A6A37C518D6D_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_671B230E_70D0_0A75_41BA_A6A37C518D6D_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_671B230E_70D0_0A75_41BA_A6A37C518D6D_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_671B230E_70D0_0A75_41BA_A6A37C518D6D_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_671B230E_70D0_0A75_41BA_A6A37C518D6D_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_671B230E_70D0_0A75_41BA_A6A37C518D6D_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_671B230E_70D0_0A75_41BA_A6A37C518D6D_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_671B230E_70D0_0A75_41BA_A6A37C518D6D_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_671B230E_70D0_0A75_41BA_A6A37C518D6D_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_6710066B_70D0_0AB2_41DB_186ACDD84803",
   "backwardYaw": -0.11,
   "yaw": -93.59,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_66A04E04_70D0_1A76_41AA_92879A22AB62",
   "backwardYaw": 23.52,
   "yaw": 55.22,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 62.52,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_67EC1F14_70D0_1A96_41C7_EC2193EA3663",
  "this.overlay_674B4DB1_70F0_19AF_41C8_484D4E04AA6E",
  "this.overlay_5B606145_7030_06F6_41B3_40E3385CF617",
  "this.overlay_5D144997_7050_1992_41D9_315577374A89"
 ],
 "pitch": 0.23,
 "hfov": 360,
 "partial": false
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_6139B39E_7030_0992_41DA_91ABF75618D5_t.jpg",
 "partial": false,
 "label": "lib_2",
 "id": "panorama_6139B39E_7030_0992_41DA_91ABF75618D5",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_6139B39E_7030_0992_41DA_91ABF75618D5_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_6139B39E_7030_0992_41DA_91ABF75618D5_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6139B39E_7030_0992_41DA_91ABF75618D5_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_6139B39E_7030_0992_41DA_91ABF75618D5_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6139B39E_7030_0992_41DA_91ABF75618D5_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_6139B39E_7030_0992_41DA_91ABF75618D5_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6139B39E_7030_0992_41DA_91ABF75618D5_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_6139B39E_7030_0992_41DA_91ABF75618D5_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6139B39E_7030_0992_41DA_91ABF75618D5_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_6139B39E_7030_0992_41DA_91ABF75618D5_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6139B39E_7030_0992_41DA_91ABF75618D5_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_6139B39E_7030_0992_41DA_91ABF75618D5_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6139B39E_7030_0992_41DA_91ABF75618D5_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "vfov": 180,
 "pitch": 0
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 179.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_48059813_71D0_0692_41CB_5BE6DA9201DA",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -90.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_499BD738_71D0_0A9E_4188_D689D9896440",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 1.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_49809729_71D0_0ABF_41D7_4DE5451EF5B1",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 125.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_48233852_71D0_06ED_41BC_BB0D20A1EF2F",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -2.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_403CDB8F_71D0_3A73_41D4_0AFC5321D313",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_614C106B_7030_06B3_41D0_8DB05C9F0A0D_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_61475CF9_7030_3F9E_41CF_6C4DB94AF166_t.jpg",
 "partial": false,
 "label": "lib_4",
 "id": "panorama_61475CF9_7030_3F9E_41CF_6C4DB94AF166",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_61475CF9_7030_3F9E_41CF_6C4DB94AF166_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_61475CF9_7030_3F9E_41CF_6C4DB94AF166_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_61475CF9_7030_3F9E_41CF_6C4DB94AF166_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_61475CF9_7030_3F9E_41CF_6C4DB94AF166_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_61475CF9_7030_3F9E_41CF_6C4DB94AF166_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_61475CF9_7030_3F9E_41CF_6C4DB94AF166_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_61475CF9_7030_3F9E_41CF_6C4DB94AF166_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_61475CF9_7030_3F9E_41CF_6C4DB94AF166_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_61475CF9_7030_3F9E_41CF_6C4DB94AF166_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_61475CF9_7030_3F9E_41CF_6C4DB94AF166_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_61475CF9_7030_3F9E_41CF_6C4DB94AF166_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_61475CF9_7030_3F9E_41CF_6C4DB94AF166_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_61475CF9_7030_3F9E_41CF_6C4DB94AF166_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "vfov": 180,
 "pitch": 0
},
{
 "thumbnailUrl": "media/panorama_614C5F4E_7030_1AF2_41C0_9F81F6E6026B_t.jpg",
 "label": "c (2)",
 "id": "panorama_614C5F4E_7030_1AF2_41C0_9F81F6E6026B",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_614C5F4E_7030_1AF2_41C0_9F81F6E6026B_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_614C5F4E_7030_1AF2_41C0_9F81F6E6026B_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_614C5F4E_7030_1AF2_41C0_9F81F6E6026B_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_614C5F4E_7030_1AF2_41C0_9F81F6E6026B_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_614C5F4E_7030_1AF2_41C0_9F81F6E6026B_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_614C5F4E_7030_1AF2_41C0_9F81F6E6026B_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_614C5F4E_7030_1AF2_41C0_9F81F6E6026B_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_614C5F4E_7030_1AF2_41C0_9F81F6E6026B_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_614C5F4E_7030_1AF2_41C0_9F81F6E6026B_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_614C5F4E_7030_1AF2_41C0_9F81F6E6026B_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_614C5F4E_7030_1AF2_41C0_9F81F6E6026B_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_614C5F4E_7030_1AF2_41C0_9F81F6E6026B_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_614C5F4E_7030_1AF2_41C0_9F81F6E6026B_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_614C5F4E_7030_1AF2_41C0_9F81F6E6026B_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_614C5F4E_7030_1AF2_41C0_9F81F6E6026B_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_614C5F4E_7030_1AF2_41C0_9F81F6E6026B_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_614C5F4E_7030_1AF2_41C0_9F81F6E6026B_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_612604C0_7030_0FEE_41D9_370EBC10496C",
   "backwardYaw": 34.7,
   "yaw": -62.61,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 61.62,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_501B7D29_70F0_FEBE_41B5_A39F8AD3BE43"
 ],
 "pitch": 6.54,
 "hfov": 154.34,
 "partial": true
},
{
 "thumbnailUrl": "media/panorama_614CF27D_7030_0A96_41C6_06C52E134CF9_t.jpg",
 "partial": false,
 "label": "eee (2)",
 "id": "panorama_614CF27D_7030_0A96_41C6_06C52E134CF9",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_614CF27D_7030_0A96_41C6_06C52E134CF9_t.jpg",
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_614CF27D_7030_0A96_41C6_06C52E134CF9_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_614CF27D_7030_0A96_41C6_06C52E134CF9_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_614CF27D_7030_0A96_41C6_06C52E134CF9_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_614CF27D_7030_0A96_41C6_06C52E134CF9_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_614CF27D_7030_0A96_41C6_06C52E134CF9_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_614CF27D_7030_0A96_41C6_06C52E134CF9_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_614CF27D_7030_0A96_41C6_06C52E134CF9_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_614CF27D_7030_0A96_41C6_06C52E134CF9_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_614CF27D_7030_0A96_41C6_06C52E134CF9_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_614CF27D_7030_0A96_41C6_06C52E134CF9_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_614CF27D_7030_0A96_41C6_06C52E134CF9_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_614CF27D_7030_0A96_41C6_06C52E134CF9_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_614CF27D_7030_0A96_41C6_06C52E134CF9_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_614CF27D_7030_0A96_41C6_06C52E134CF9_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_614CF27D_7030_0A96_41C6_06C52E134CF9_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_614CF27D_7030_0A96_41C6_06C52E134CF9_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_614CBDF2_7030_7992_41C2_BB897AB5B1C7",
   "backwardYaw": 89.21,
   "yaw": -178.39,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_61D13DF1_7030_39AE_41D3_EAD082CFA389",
   "backwardYaw": 0.29,
   "yaw": -0.57,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_614FCB21_7030_3AAF_41D1_43AC52AA330E",
   "backwardYaw": -104.36,
   "yaw": 89.7,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 65.08,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_527EBF41_70D0_1AEE_41DB_D50070CE01A2",
  "this.overlay_53CAAA92_70D0_7A6D_4190_4BDAF5FFA35C",
  "this.overlay_52D59060_70D0_06AE_419B_DA73E1ADF07C"
 ],
 "pitch": 2.5,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_61D1159C_7030_0995_4184_9A9B9431557C_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -108.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4006CB12_71D0_3A6D_41C3_C350B84AC4F6",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_614CF795_7030_0997_41B3_3DD2AB366E34_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "closeButtonBackgroundOpacity": 1,
 "shadowBlurRadius": 6,
 "id": "window_5D2327F0_7050_09AD_41C7_78B882F1DACA",
 "closeButtonPaddingLeft": 0,
 "width": 200,
 "closeButtonBorderRadius": 11,
 "closeButtonPaddingBottom": 0,
 "scrollBarWidth": 10,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyBackgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "headerBackgroundOpacity": 1,
 "minHeight": 20,
 "bodyPaddingLeft": 5,
 "modal": true,
 "titleTextDecoration": "none",
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "backgroundColorRatios": [],
 "headerVerticalAlign": "middle",
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "closeButtonIconWidth": 12,
 "paddingRight": 0,
 "headerBackgroundColorDirection": "horizontal",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "backgroundColor": [],
 "bodyPaddingBottom": 5,
 "closeButtonPaddingTop": 0,
 "title": "",
 "gap": 10,
 "closeButtonIconHeight": 12,
 "minWidth": 20,
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "shadowVerticalLength": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBorderSize": 0,
 "height": 200,
 "titlePaddingRight": 5,
 "titleFontColor": "#000000",
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "shadowSpread": 1,
 "paddingTop": 0,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.htmlText_5D2337F0_7050_09AD_41CE_671495F49CB1"
 ],
 "closeButtonBackgroundColorDirection": "vertical",
 "veilOpacity": 0.4,
 "veilColorDirection": "horizontal",
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "closeButtonBorderColor": "#000000",
 "backgroundOpacity": 1,
 "shadow": true,
 "class": "Window",
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonIconLineWidth": 2,
 "bodyBackgroundOpacity": 1,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "footerHeight": 5,
 "headerPaddingRight": 10,
 "footerBackgroundOpacity": 1,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "titleFontWeight": "normal",
 "layout": "vertical",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#00FF66",
  "#000000",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "footerBorderColor": "#000000",
 "titleFontSize": "1.29vmin",
 "backgroundColorDirection": "vertical",
 "footerBorderSize": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "horizontalAlign": "center",
 "closeButtonIconColor": "#000000",
 "titleFontStyle": "normal",
 "titleFontFamily": "Arial",
 "scrollBarMargin": 2,
 "closeButtonPaddingRight": 0,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "shadowHorizontalLength": 3,
 "contentOpaque": false,
 "closeButtonBorderSize": 0,
 "headerBackgroundColorRatios": [
  0,
  0.1,
  0.39,
  0.63,
  1
 ],
 "data": {
  "name": "Window84838"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -179.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_49FD77E4_71D0_09B6_41D0_ADAE1878FE95",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_614C0184_7030_0676_41D8_E174B7CA6FBB_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_614C3E9D_7030_1B91_41D4_C05D72D3FEED_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -146.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_401CAB21_71D0_3AAE_41D6_358ACDDEC1FE",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_614C7114_7030_0695_41D4_F33CF326C756_t.jpg",
 "label": "lib_ground",
 "id": "panorama_614C7114_7030_0695_41D4_F33CF326C756",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_614C7114_7030_0695_41D4_F33CF326C756_t.jpg",
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_614C7114_7030_0695_41D4_F33CF326C756_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_614C7114_7030_0695_41D4_F33CF326C756_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_614C7114_7030_0695_41D4_F33CF326C756_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_614C7114_7030_0695_41D4_F33CF326C756_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_614C7114_7030_0695_41D4_F33CF326C756_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_614C7114_7030_0695_41D4_F33CF326C756_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_614C7114_7030_0695_41D4_F33CF326C756_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_614C7114_7030_0695_41D4_F33CF326C756_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_614C7114_7030_0695_41D4_F33CF326C756_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_614C7114_7030_0695_41D4_F33CF326C756_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_614C7114_7030_0695_41D4_F33CF326C756_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_614C7114_7030_0695_41D4_F33CF326C756_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_614C7114_7030_0695_41D4_F33CF326C756_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_614C7114_7030_0695_41D4_F33CF326C756_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_614C7114_7030_0695_41D4_F33CF326C756_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_614C7114_7030_0695_41D4_F33CF326C756_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_614C1ABF_7030_1B92_41A9_03DA8BEB1A71",
   "backwardYaw": -89.11,
   "yaw": 0.72,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 62.55,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_58ED1806_70D0_0672_41B9_7C3729A417C3",
  "this.overlay_5B29E395_7030_0997_41CF_444B1CB7401A"
 ],
 "pitch": -1.68,
 "hfov": 360,
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_614FCB21_7030_3AAF_41D1_43AC52AA330E_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_614C106B_7030_06B3_41D0_8DB05C9F0A0D_t.jpg",
 "partial": false,
 "label": "satish",
 "id": "panorama_614C106B_7030_06B3_41D0_8DB05C9F0A0D",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_614C106B_7030_06B3_41D0_8DB05C9F0A0D_t.jpg",
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_614C106B_7030_06B3_41D0_8DB05C9F0A0D_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_614C106B_7030_06B3_41D0_8DB05C9F0A0D_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_614C106B_7030_06B3_41D0_8DB05C9F0A0D_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_614C106B_7030_06B3_41D0_8DB05C9F0A0D_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_614C106B_7030_06B3_41D0_8DB05C9F0A0D_0/d/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_614C106B_7030_06B3_41D0_8DB05C9F0A0D_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_614C106B_7030_06B3_41D0_8DB05C9F0A0D_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_614C106B_7030_06B3_41D0_8DB05C9F0A0D_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_614C106B_7030_06B3_41D0_8DB05C9F0A0D_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_614C106B_7030_06B3_41D0_8DB05C9F0A0D_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_614C106B_7030_06B3_41D0_8DB05C9F0A0D_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_614C106B_7030_06B3_41D0_8DB05C9F0A0D_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_614C106B_7030_06B3_41D0_8DB05C9F0A0D_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_614C106B_7030_06B3_41D0_8DB05C9F0A0D_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_614C106B_7030_06B3_41D0_8DB05C9F0A0D_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_614C106B_7030_06B3_41D0_8DB05C9F0A0D_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_614C106B_7030_06B3_41D0_8DB05C9F0A0D_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_614C106B_7030_06B3_41D0_8DB05C9F0A0D_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_614C106B_7030_06B3_41D0_8DB05C9F0A0D_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_614C106B_7030_06B3_41D0_8DB05C9F0A0D_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_614CF795_7030_0997_41B3_3DD2AB366E34",
   "backwardYaw": 33.6,
   "yaw": -97.08,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_61E6D356_7030_0A95_41B1_5F8087399D42",
   "backwardYaw": -104.43,
   "yaw": 85.42,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 64.57,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_6AE97E70_70F0_3AAD_41D5_F62D8D5519E9",
  "this.overlay_6A09FF05_70F0_1A76_41D7_D9634E7B92FC"
 ],
 "pitch": -4.63,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -169.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_49A7D767_71D0_0AB2_41D5_C2C011A10A6A",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 90.87,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_402D8B60_71D0_3AAD_41D7_05A2D86A639F",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_61D13DF1_7030_39AE_41D3_EAD082CFA389_t.jpg",
 "label": "eee (3)",
 "id": "panorama_61D13DF1_7030_39AE_41D3_EAD082CFA389",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_61D13DF1_7030_39AE_41D3_EAD082CFA389_t.jpg",
   "class": "CubicPanoramaFrame",
   "back": {
    "levels": [
     {
      "url": "media/panorama_61D13DF1_7030_39AE_41D3_EAD082CFA389_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_61D13DF1_7030_39AE_41D3_EAD082CFA389_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_61D13DF1_7030_39AE_41D3_EAD082CFA389_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_61D13DF1_7030_39AE_41D3_EAD082CFA389_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_61D13DF1_7030_39AE_41D3_EAD082CFA389_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_61D13DF1_7030_39AE_41D3_EAD082CFA389_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_61D13DF1_7030_39AE_41D3_EAD082CFA389_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_61D13DF1_7030_39AE_41D3_EAD082CFA389_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_61D13DF1_7030_39AE_41D3_EAD082CFA389_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_61D13DF1_7030_39AE_41D3_EAD082CFA389_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_61D13DF1_7030_39AE_41D3_EAD082CFA389_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_61D13DF1_7030_39AE_41D3_EAD082CFA389_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_61D13DF1_7030_39AE_41D3_EAD082CFA389_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_61D13DF1_7030_39AE_41D3_EAD082CFA389_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_61D13DF1_7030_39AE_41D3_EAD082CFA389_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_61D13DF1_7030_39AE_41D3_EAD082CFA389_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_614CF27D_7030_0A96_41C6_06C52E134CF9",
   "backwardYaw": -0.57,
   "yaw": 0.29,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_614CBB82_7030_FA72_41DB_3593A530EE19",
   "backwardYaw": 125.57,
   "yaw": -89.13,
   "class": "AdjacentPanorama",
   "distance": 1
  },
  {
   "panorama": "this.panorama_671B230E_70D0_0A75_41BA_A6A37C518D6D",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_61D1159C_7030_0995_4184_9A9B9431557C",
   "backwardYaw": 83.84,
   "yaw": 179.56,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 63.38,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_5278587B_70D0_0692_41CB_6DDB542E1DAC",
  "this.overlay_54BA8755_70D0_0A96_41CE_26ED8A6F663B",
  "this.overlay_53B32250_70D0_0AEE_41C8_BC0B91C8D90C",
  "this.overlay_542EF1BB_70D0_0992_41C1_E399AC50C37A"
 ],
 "pitch": -0.13,
 "hfov": 360,
 "partial": false
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -179.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_48FFB94C_71D0_06F5_41C8_CFBFC601E77F",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_61D13DF1_7030_39AE_41D3_EAD082CFA389_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_6145C628_7030_0ABE_41A1_141AC146DDF2_t.jpg",
 "partial": false,
 "label": "lib_6",
 "id": "panorama_6145C628_7030_0ABE_41A1_141AC146DDF2",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_6145C628_7030_0ABE_41A1_141AC146DDF2_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_6145C628_7030_0ABE_41A1_141AC146DDF2_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6145C628_7030_0ABE_41A1_141AC146DDF2_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_6145C628_7030_0ABE_41A1_141AC146DDF2_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6145C628_7030_0ABE_41A1_141AC146DDF2_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_6145C628_7030_0ABE_41A1_141AC146DDF2_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6145C628_7030_0ABE_41A1_141AC146DDF2_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_6145C628_7030_0ABE_41A1_141AC146DDF2_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6145C628_7030_0ABE_41A1_141AC146DDF2_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_6145C628_7030_0ABE_41A1_141AC146DDF2_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6145C628_7030_0ABE_41A1_141AC146DDF2_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_6145C628_7030_0ABE_41A1_141AC146DDF2_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6145C628_7030_0ABE_41A1_141AC146DDF2_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "vfov": 180,
 "pitch": 0
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_614C5F4E_7030_1AF2_41C0_9F81F6E6026B_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "targetYaw": 2.11,
    "yawSpeed": 1.31,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest"
   },
   {
    "easing": "linear",
    "targetYaw": 30.06,
    "yawSpeed": 1.31,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest"
   },
   {
    "easing": "cubic_out",
    "targetYaw": 32.17,
    "yawSpeed": 1.31,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "shadowBlurRadius": 6,
 "id": "window_5D1292BD_7050_0B96_41DA_FEFAAF82BEC9",
 "width": 200,
 "closeButtonBorderRadius": 11,
 "scrollBarWidth": 10,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "borderRadius": 5,
 "shadowOpacity": 0.5,
 "bodyBackgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "closeButtonPressedIconColor": "#FFFFFF",
 "headerBackgroundOpacity": 1,
 "minHeight": 20,
 "bodyPaddingLeft": 5,
 "modal": true,
 "titleTextDecoration": "none",
 "hideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "titlePaddingLeft": 5,
 "verticalAlign": "middle",
 "backgroundColorRatios": [],
 "headerVerticalAlign": "middle",
 "bodyBorderSize": 0,
 "scrollBarOpacity": 0.5,
 "borderSize": 0,
 "closeButtonIconWidth": 12,
 "paddingRight": 0,
 "headerBackgroundColorDirection": "vertical",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "bodyPaddingTop": 5,
 "backgroundColor": [],
 "bodyPaddingBottom": 5,
 "title": "",
 "gap": 10,
 "closeButtonIconHeight": 12,
 "minWidth": 20,
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "headerPaddingBottom": 10,
 "shadowVerticalLength": 0,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "headerBorderSize": 0,
 "height": 200,
 "titlePaddingRight": 5,
 "titleFontColor": "#000000",
 "veilColorRatios": [
  0,
  1
 ],
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "shadowSpread": 1,
 "paddingTop": 0,
 "headerBorderColor": "#000000",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "titlePaddingBottom": 5,
 "footerBackgroundColorDirection": "vertical",
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "children": [
  "this.htmlText_5D1362BD_7050_0B96_41D5_B8530EA54872"
 ],
 "veilOpacity": 0.4,
 "veilColorDirection": "horizontal",
 "showEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "paddingLeft": 0,
 "shadowColor": "#000000",
 "veilShowEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeInEffect"
 },
 "backgroundOpacity": 1,
 "shadow": true,
 "class": "Window",
 "layout": "vertical",
 "overflow": "scroll",
 "headerPaddingLeft": 10,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#000000",
  "#33FF99",
  "#FFFFFF"
 ],
 "closeButtonIconLineWidth": 2,
 "bodyBackgroundOpacity": 1,
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "propagateClick": false,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "footerHeight": 5,
 "headerPaddingRight": 10,
 "footerBackgroundOpacity": 1,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "titleFontWeight": "normal",
 "headerBackgroundColor": [
  "#DDDDDD",
  "#663399",
  "#00FF00",
  "#FFFFFF"
 ],
 "veilHideEffect": {
  "duration": 500,
  "easing": "cubic_in_out",
  "class": "FadeOutEffect"
 },
 "bodyBorderColor": "#000000",
 "footerBorderColor": "#000000",
 "titleFontSize": "1.29vmin",
 "backgroundColorDirection": "vertical",
 "footerBorderSize": 0,
 "bodyBackgroundColorRatios": [
  0,
  0.24,
  0.69,
  1
 ],
 "horizontalAlign": "center",
 "closeButtonIconColor": "#000000",
 "titleFontStyle": "normal",
 "titleFontFamily": "Arial Narrow",
 "scrollBarMargin": 2,
 "bodyPaddingRight": 5,
 "closeButtonBackgroundColorRatios": [],
 "headerPaddingTop": 10,
 "shadowHorizontalLength": 3,
 "contentOpaque": false,
 "headerBackgroundColorRatios": [
  0,
  0.61,
  0.81,
  1
 ],
 "data": {
  "name": "Window90078"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_614C184B_7030_06F2_41B0_5AEEF26ADC0C_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 117.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_48BA38FE_71D0_0795_41D2_86EA86AFBCC0",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "targetYaw": 2.11,
    "yawSpeed": 1.31,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest"
   },
   {
    "easing": "linear",
    "targetYaw": 30.06,
    "yawSpeed": 1.31,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest"
   },
   {
    "easing": "cubic_out",
    "targetYaw": 32.17,
    "yawSpeed": 1.31,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_614C3E9D_7030_1B91_41D4_C05D72D3FEED_t.jpg",
 "partial": false,
 "label": "lib_1",
 "id": "panorama_614C3E9D_7030_1B91_41D4_C05D72D3FEED",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_614C3E9D_7030_1B91_41D4_C05D72D3FEED_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_614C3E9D_7030_1B91_41D4_C05D72D3FEED_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_614C3E9D_7030_1B91_41D4_C05D72D3FEED_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_614C3E9D_7030_1B91_41D4_C05D72D3FEED_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_614C3E9D_7030_1B91_41D4_C05D72D3FEED_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_614C3E9D_7030_1B91_41D4_C05D72D3FEED_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_614C3E9D_7030_1B91_41D4_C05D72D3FEED_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_614C3E9D_7030_1B91_41D4_C05D72D3FEED_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_614C3E9D_7030_1B91_41D4_C05D72D3FEED_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_614C3E9D_7030_1B91_41D4_C05D72D3FEED_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_614C3E9D_7030_1B91_41D4_C05D72D3FEED_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_614C3E9D_7030_1B91_41D4_C05D72D3FEED_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_614C3E9D_7030_1B91_41D4_C05D72D3FEED_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "vfov": 180,
 "pitch": 0
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -175.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_49B99777_71D0_0A93_41CD_EF8EAC475D39",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_614C184B_7030_06F2_41B0_5AEEF26ADC0C_t.jpg",
 "partial": false,
 "label": "lib_3",
 "id": "panorama_614C184B_7030_06F2_41B0_5AEEF26ADC0C",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_614C184B_7030_06F2_41B0_5AEEF26ADC0C_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_614C184B_7030_06F2_41B0_5AEEF26ADC0C_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_614C184B_7030_06F2_41B0_5AEEF26ADC0C_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_614C184B_7030_06F2_41B0_5AEEF26ADC0C_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_614C184B_7030_06F2_41B0_5AEEF26ADC0C_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_614C184B_7030_06F2_41B0_5AEEF26ADC0C_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_614C184B_7030_06F2_41B0_5AEEF26ADC0C_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_614C184B_7030_06F2_41B0_5AEEF26ADC0C_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_614C184B_7030_06F2_41B0_5AEEF26ADC0C_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_614C184B_7030_06F2_41B0_5AEEF26ADC0C_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_614C184B_7030_06F2_41B0_5AEEF26ADC0C_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_614C184B_7030_06F2_41B0_5AEEF26ADC0C_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_614C184B_7030_06F2_41B0_5AEEF26ADC0C_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "vfov": 180,
 "pitch": 0
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_61E53F0E_7030_1A72_41D2_A1A6F5E13379_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "thumbnailUrl": "media/panorama_61E53F0E_7030_1A72_41D2_A1A6F5E13379_t.jpg",
 "partial": false,
 "label": "mech",
 "id": "panorama_61E53F0E_7030_1A72_41D2_A1A6F5E13379",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_61E53F0E_7030_1A72_41D2_A1A6F5E13379_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_61E53F0E_7030_1A72_41D2_A1A6F5E13379_0/u/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_61E53F0E_7030_1A72_41D2_A1A6F5E13379_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_61E53F0E_7030_1A72_41D2_A1A6F5E13379_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_61E53F0E_7030_1A72_41D2_A1A6F5E13379_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_61E53F0E_7030_1A72_41D2_A1A6F5E13379_0/b/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_61E53F0E_7030_1A72_41D2_A1A6F5E13379_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_61E53F0E_7030_1A72_41D2_A1A6F5E13379_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_61E53F0E_7030_1A72_41D2_A1A6F5E13379_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_61E53F0E_7030_1A72_41D2_A1A6F5E13379_0/f/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_61E53F0E_7030_1A72_41D2_A1A6F5E13379_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_61E53F0E_7030_1A72_41D2_A1A6F5E13379_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_61E53F0E_7030_1A72_41D2_A1A6F5E13379_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_61E53F0E_7030_1A72_41D2_A1A6F5E13379_0/l/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_61E53F0E_7030_1A72_41D2_A1A6F5E13379_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_61E53F0E_7030_1A72_41D2_A1A6F5E13379_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_61E53F0E_7030_1A72_41D2_A1A6F5E13379_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_61E53F0E_7030_1A72_41D2_A1A6F5E13379_0/r/0/{row}_{column}.jpg",
      "colCount": 6,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 3072,
      "rowCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_61E53F0E_7030_1A72_41D2_A1A6F5E13379_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1536,
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_61E53F0E_7030_1A72_41D2_A1A6F5E13379_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_61E53F0E_7030_1A72_41D2_A1A6F5E13379_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "class": "Panorama",
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_614FCB21_7030_3AAF_41D1_43AC52AA330E",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_61F6A83C_7030_0695_41D8_64A6B2C7ED3A",
   "backwardYaw": 71.24,
   "yaw": -101.33,
   "class": "AdjacentPanorama",
   "distance": 1
  }
 ],
 "vfov": 62.96,
 "hfovMax": 130,
 "overlays": [
  "this.overlay_5973E360_70D0_0AAE_41C1_60C5EC1BC39A",
  "this.overlay_594A85E6_70D0_09B2_41C8_9356376E5FA5"
 ],
 "pitch": 4.66,
 "hfov": 360
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -33.78,
  "class": "PanoramaCameraPosition",
  "pitch": 5.88
 },
 "id": "panorama_6113C3EE_7030_09B2_41D5_FB75B3986836_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 87.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_48DFF91D_71D0_0697_41A4_4B884D4D0A70",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_61EDD171_7030_06AF_41D3_42DC820009C2_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 176.26,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4B0DC95B_71D0_0692_41CD_4D1A64E8DB30",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_612604C0_7030_0FEE_41D9_370EBC10496C_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 75.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_40194B31_71D0_3AAF_41D9_68821454E6B9",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -90.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_49EA77C5_71D0_09F6_41CE_D5AE90ECE075",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -145.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_49755709_71D0_0A7E_41CD_D5AA9B4CA4C6",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMax": 130,
 "thumbnailUrl": "media/panorama_614C0184_7030_0676_41D8_E174B7CA6FBB_t.jpg",
 "partial": false,
 "label": "lib_5",
 "id": "panorama_614C0184_7030_0676_41D8_E174B7CA6FBB",
 "hfovMin": "150%",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_614C0184_7030_0676_41D8_E174B7CA6FBB_t.jpg",
   "class": "CubicPanoramaFrame",
   "top": {
    "levels": [
     {
      "url": "media/panorama_614C0184_7030_0676_41D8_E174B7CA6FBB_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_614C0184_7030_0676_41D8_E174B7CA6FBB_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_614C0184_7030_0676_41D8_E174B7CA6FBB_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_614C0184_7030_0676_41D8_E174B7CA6FBB_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_614C0184_7030_0676_41D8_E174B7CA6FBB_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_614C0184_7030_0676_41D8_E174B7CA6FBB_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_614C0184_7030_0676_41D8_E174B7CA6FBB_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_614C0184_7030_0676_41D8_E174B7CA6FBB_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_614C0184_7030_0676_41D8_E174B7CA6FBB_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_614C0184_7030_0676_41D8_E174B7CA6FBB_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_614C0184_7030_0676_41D8_E174B7CA6FBB_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_614C0184_7030_0676_41D8_E174B7CA6FBB_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "hfov": 360,
 "class": "Panorama",
 "vfov": 180,
 "pitch": 0
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 86.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_4866C8A0_71D0_07AD_41C3_52C8564B6CF5",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_61ED06C2_7030_0BED_41DA_62A6B0B3CB98_camera",
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 }
},
{
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipPaddingRight": 10,
 "toolTipBorderSize": 1,
 "id": "MainViewer",
 "left": 0,
 "toolTipPaddingTop": 7,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 10,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "transitionDuration": 500,
 "minHeight": 50,
 "toolTipBorderRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 5,
 "minWidth": 100,
 "borderSize": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingRight": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 0.5,
 "displayTooltipInTouchScreens": true,
 "toolTipFontSize": 13,
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 7,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "shadow": false,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarProgressBorderColor": "#000000",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Georgia",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": 0,
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#000000",
 "toolTipFontColor": "#FFFFFF",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "children": [
  "this.Image_5F5B362B_7050_0AB3_41CF_3EE4B5A8B5CA"
 ],
 "id": "Container_0C5F33A8_3BA0_A6FF_41C3_2A6652E2CE94",
 "left": 28,
 "paddingLeft": 0,
 "width": 271,
 "class": "Container",
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "overflow": "visible",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "bottom": 0,
 "minWidth": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "height": 97,
 "contentOpaque": false,
 "data": {
  "name": "--STICKER"
 },
 "paddingTop": 0,
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "layout": "absolute",
 "children": [
  "this.Label_0E9CEE5D_36F3_E64E_419C_5A94FA5D3CA1",
  "this.Image_05314BAF_3AA1_A6F2_41CB_86A11240FA50",
  "this.Container_0542AAAA_3AA3_A6F3_41B2_0E208ADBBBE1"
 ],
 "scrollBarOpacity": 0.46,
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "paddingLeft": 0,
 "class": "Container",
 "shadow": true,
 "borderRadius": 0,
 "shadowOpacity": 0,
 "right": "0%",
 "backgroundOpacity": 0.89,
 "overflow": "visible",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "propagateClick": true,
 "shadowColor": "#000000",
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0.06,
  0.15,
  0.39
 ],
 "top": 0,
 "backgroundColor": [
  "#0099CC",
  "#FF0033",
  "#F7931E"
 ],
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "backgroundColorDirection": "horizontal",
 "gap": 10,
 "minWidth": 1,
 "scrollBarMargin": 2,
 "height": 66.4,
 "shadowVerticalLength": 0,
 "contentOpaque": false,
 "shadowHorizontalLength": 3,
 "paddingTop": 0,
 "shadowBlurRadius": 6,
 "data": {
  "name": "--BUTTON SET"
 },
 "shadowSpread": 1
},
{
 "children": [
  "this.Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
  "this.Button_485BFF41_598E_3DB2_41A9_33F36E014467",
  "this.Button_4C5C0864_5A8E_C472_41C4_7C0748488A41",
  "this.Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA",
  "this.Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A"
 ],
 "id": "Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4",
 "paddingLeft": 0,
 "width": 60,
 "class": "Container",
 "right": 15,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 1,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0.02
 ],
 "top": 62,
 "backgroundColor": [
  "#F7931E"
 ],
 "borderSize": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "scrollBarMargin": 2,
 "height": 300,
 "contentOpaque": false,
 "visible": false,
 "data": {
  "name": "-button set"
 },
 "paddingTop": 0,
 "layout": "vertical",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.IconButton_7B21DC51_3AA0_A251_41B1_CEAABC2475F8",
  "this.IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0",
  "this.IconButton_7B21FC51_3AA0_A251_41CC_46CDE74591EA"
 ],
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "left": "30.73%",
 "paddingLeft": 0,
 "width": "29.172%",
 "class": "Container",
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "middle",
 "bottom": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingRight": 30,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "right",
 "gap": 3,
 "scrollBarMargin": 2,
 "height": 90,
 "contentOpaque": false,
 "data": {
  "name": "-button set container"
 },
 "paddingTop": 0,
 "layout": "horizontal",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "paddingLeft": 0,
 "class": "Container",
 "right": "0%",
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "contentOpaque": false,
 "visible": false,
 "data": {
  "name": "---INFO photo"
 },
 "paddingTop": 0,
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "paddingLeft": 0,
 "class": "Container",
 "right": "0%",
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "contentOpaque": false,
 "visible": false,
 "data": {
  "name": "---PANORAMA LIST"
 },
 "paddingTop": 0,
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
  "this.Container_221B3648_0C06_E5FD_4199_FCE031AE003B"
 ],
 "id": "Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7",
 "left": "0%",
 "paddingLeft": 0,
 "class": "Container",
 "right": "0%",
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "contentOpaque": false,
 "visible": false,
 "data": {
  "name": "---LOCATION"
 },
 "paddingTop": 0,
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "paddingLeft": 0,
 "class": "Container",
 "right": "0%",
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "contentOpaque": false,
 "visible": false,
 "data": {
  "name": "---FLOORPLAN"
 },
 "paddingTop": 0,
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "paddingLeft": 0,
 "class": "Container",
 "right": "0%",
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "contentOpaque": false,
 "visible": false,
 "data": {
  "name": "---PHOTOALBUM"
 },
 "paddingTop": 0,
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "paddingLeft": 0,
 "class": "Container",
 "right": "0%",
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0.6,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "0%",
 "creationPolicy": "inAdvance",
 "bottom": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "contentOpaque": false,
 "visible": false,
 "data": {
  "name": "---REALTOR"
 },
 "paddingTop": 0,
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Arial",
 "pressedIconWidth": 30,
 "id": "Button_4C5C0864_5A8E_C472_41C4_7C0748488A41",
 "paddingLeft": 0,
 "width": 60,
 "iconBeforeLabel": true,
 "class": "Button",
 "backgroundOpacity": 1,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "iconHeight": 30,
 "minHeight": 1,
 "iconWidth": 30,
 "propagateClick": false,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0
 ],
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "iconURL": "skin/Button_4C5C0864_5A8E_C472_41C4_7C0748488A41.png",
 "pressedRollOverBackgroundColor": [
  "#CE6700"
 ],
 "rollOverBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "backgroundColor": [
  "#F7931E"
 ],
 "borderSize": 0,
 "paddingRight": 0,
 "mode": "toggle",
 "minWidth": 1,
 "fontSize": 12,
 "horizontalAlign": "center",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedIconURL": "skin/Button_4C5C0864_5A8E_C472_41C4_7C0748488A41_pressed.png",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "height": 60,
 "fontColor": "#FFFFFF",
 "pressedIconHeight": 30,
 "data": {
  "name": "Button Settings Mute"
 },
 "fontStyle": "normal",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Arial",
 "pressedIconWidth": 30,
 "id": "Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A",
 "paddingLeft": 0,
 "width": 60,
 "iconBeforeLabel": true,
 "class": "Button",
 "backgroundOpacity": 1,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "iconHeight": 30,
 "minHeight": 1,
 "iconWidth": 30,
 "propagateClick": false,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0
 ],
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "iconURL": "skin/Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A.png",
 "pressedRollOverBackgroundColor": [
  "#CE6700"
 ],
 "rollOverBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "backgroundColor": [
  "#F7931E"
 ],
 "borderSize": 0,
 "paddingRight": 0,
 "mode": "toggle",
 "minWidth": 1,
 "fontSize": 12,
 "horizontalAlign": "center",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedIconURL": "skin/Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A_pressed.png",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "height": 60,
 "fontColor": "#FFFFFF",
 "pressedIconHeight": 30,
 "data": {
  "name": "Button Settings Fullscreen"
 },
 "fontStyle": "normal",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "bleachingDistance": 0.57,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 23.3,
 "bleaching": 0.42,
 "id": "overlay_5A5559B7_7033_F992_41DA_D9C4432A2AEE",
 "yaw": 3.67
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_614FCB21_7030_3AAF_41D1_43AC52AA330E, this.camera_400B0B02_71D0_3A6D_41C1_D0A4E0DEBDEB); this.mainPlayList.set('selectedIndex', 22)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4CE46177_7030_0692_41CB_B6FEAE2DA688",
   "pitch": -9.63,
   "yaw": 4.76,
   "hfov": 16.29,
   "distance": 50
  }
 ],
 "id": "overlay_5D11CBDF_7030_1993_41CE_A7DEBE337CBF",
 "data": {
  "label": "Arrow 05a Right"
 },
 "maps": [
  {
   "yaw": 4.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_61ED06C2_7030_0BED_41DA_62A6B0B3CB98_1_HS_0_0_0_map.gif",
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.63,
   "hfov": 16.29
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 21)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4CE4F177_7030_0692_41D8_7C1FC492FBCA",
   "pitch": -9.56,
   "yaw": -19,
   "hfov": 17.03,
   "distance": 50
  }
 ],
 "id": "overlay_5CF352D7_7030_0B93_41D7_8CFDBDA7E3E5",
 "data": {
  "label": "Arrow 05b Left"
 },
 "maps": [
  {
   "yaw": -19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_61ED06C2_7030_0BED_41DA_62A6B0B3CB98_1_HS_1_0_0_map.gif",
      "width": 48,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.56,
   "hfov": 17.03
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_5D2327F0_7050_09AD_41C7_78B882F1DACA, null, false)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_423B7754_7050_0A95_41D4_432B8BDAD98A",
   "pitch": -7.5,
   "yaw": -175.16,
   "hfov": 13.96,
   "distance": 100
  }
 ],
 "id": "overlay_5C75C146_7050_06F5_41D3_4CBBAF89DBC8",
 "data": {
  "label": "Info Red 02"
 },
 "maps": [
  {
   "yaw": -175.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_61ED06C2_7030_0BED_41DA_62A6B0B3CB98_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.5,
   "hfov": 13.96
  }
 ],
 "rollOverDisplay": false
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Arial",
 "pressedIconWidth": 30,
 "id": "Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA",
 "paddingLeft": 0,
 "width": 60,
 "iconBeforeLabel": true,
 "class": "Button",
 "backgroundOpacity": 1,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "iconHeight": 30,
 "minHeight": 1,
 "iconWidth": 30,
 "propagateClick": false,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0
 ],
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "iconURL": "skin/Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA.png",
 "pressedRollOverBackgroundColor": [
  "#CE6700"
 ],
 "rollOverBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "backgroundColor": [
  "#F7931E"
 ],
 "borderSize": 0,
 "rollOverIconWidth": 30,
 "paddingRight": 0,
 "mode": "toggle",
 "minWidth": 1,
 "fontSize": 12,
 "rollOverIconHeight": 30,
 "horizontalAlign": "center",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedIconURL": "skin/Button_4DE935B8_5A86_4CD2_41A9_D487E3DF3FBA_pressed.png",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "height": 60,
 "fontColor": "#FFFFFF",
 "pressedIconHeight": 30,
 "data": {
  "name": "Button Settings HS"
 },
 "fontStyle": "normal",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Arial",
 "pressedIconWidth": 30,
 "id": "Button_485BFF41_598E_3DB2_41A9_33F36E014467",
 "paddingLeft": 0,
 "width": 60,
 "iconBeforeLabel": true,
 "class": "Button",
 "backgroundOpacity": 1,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "iconHeight": 30,
 "minHeight": 1,
 "iconWidth": 30,
 "propagateClick": false,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0
 ],
 "pressedRollOverBackgroundColorRatios": [
  0
 ],
 "iconURL": "skin/Button_485BFF41_598E_3DB2_41A9_33F36E014467.png",
 "pressedRollOverBackgroundColor": [
  "#CE6700"
 ],
 "rollOverBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "backgroundColor": [
  "#F7931E"
 ],
 "borderSize": 0,
 "rollOverIconWidth": 30,
 "paddingRight": 0,
 "mode": "toggle",
 "minWidth": 1,
 "fontSize": 12,
 "rollOverIconHeight": 30,
 "horizontalAlign": "center",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedIconURL": "skin/Button_485BFF41_598E_3DB2_41A9_33F36E014467_pressed.png",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "height": 60,
 "fontColor": "#FFFFFF",
 "pressedIconHeight": 30,
 "data": {
  "name": "Button Settings Gyro"
 },
 "fontStyle": "normal",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Arial",
 "id": "Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0",
 "paddingLeft": 0,
 "width": 60,
 "iconBeforeLabel": true,
 "class": "Button",
 "backgroundOpacity": 1,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "iconHeight": 30,
 "minHeight": 1,
 "iconWidth": 30,
 "propagateClick": false,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0
 ],
 "iconURL": "skin/Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0.png",
 "rollOverBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "backgroundColor": [
  "#F7931E"
 ],
 "borderSize": 0,
 "paddingRight": 0,
 "mode": "push",
 "minWidth": 1,
 "fontSize": 12,
 "horizontalAlign": "center",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedIconURL": "skin/Button_4D1C404A_5A87_C3B6_41BC_63B811C40CD0_pressed.png",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "height": 60,
 "fontColor": "#FFFFFF",
 "data": {
  "name": "Button settings VR"
 },
 "fontStyle": "normal",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_614CF795_7030_0997_41B3_3DD2AB366E34, this.camera_49ACC758_71D0_0A9D_41BD_8AC75CB75E1E); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4CEAF177_7030_0692_41B8_806D2D95132B",
   "pitch": -4.97,
   "yaw": -17.25,
   "hfov": 9.89,
   "distance": 100
  }
 ],
 "id": "overlay_5A913671_7030_0AAF_41D7_C1D92CA1CD13",
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "yaw": -17.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_614FCB21_7030_3AAF_41D1_43AC52AA330E_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.97,
   "hfov": 9.89
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_614CBB82_7030_FA72_41DB_3593A530EE19, this.camera_49A7D767_71D0_0AB2_41D5_C2C011A10A6A); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4CEB3177_7030_0692_41DB_B7810B27B8AC",
   "pitch": 3.42,
   "yaw": -76.05,
   "hfov": 7.59,
   "distance": 100
  }
 ],
 "id": "overlay_5AFA0348_7030_0AFD_41D1_9081EDE2EF98",
 "data": {
  "label": "Circle Arrow 06"
 },
 "maps": [
  {
   "yaw": -76.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_614FCB21_7030_3AAF_41D1_43AC52AA330E_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 3.42,
   "hfov": 7.59
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_614CF27D_7030_0A96_41C6_06C52E134CF9, this.camera_499BD738_71D0_0A9E_4188_D689D9896440); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4CEB9177_7030_0692_41D9_9ACBE4077A5D",
   "pitch": -6.61,
   "yaw": -104.36,
   "hfov": 13.85,
   "distance": 100
  }
 ],
 "id": "overlay_5A1014F0_7030_0FAE_41D7_B80FA3514B5F",
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "yaw": -104.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_614FCB21_7030_3AAF_41D1_43AC52AA330E_1_HS_2_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.61,
   "hfov": 13.85
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_61ED06C2_7030_0BED_41DA_62A6B0B3CB98, this.camera_49B99777_71D0_0A93_41CD_EF8EAC475D39); this.mainPlayList.set('selectedIndex', 23)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4CEBD177_7030_0692_41C2_FDE34166D68E",
   "pitch": -16.75,
   "yaw": 137.05,
   "hfov": 25.29,
   "distance": 50
  }
 ],
 "id": "overlay_5D2DDB65_7030_1AB7_41B3_DEC96AF84BD4",
 "data": {
  "label": "Arrow 05a Right-Up"
 },
 "maps": [
  {
   "yaw": 137.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_614FCB21_7030_3AAF_41D1_43AC52AA330E_1_HS_3_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.75,
   "hfov": 25.29
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 25)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5284BC9A_70F0_1F9D_41D5_313B30F3427C",
   "pitch": -8.62,
   "yaw": -65.97,
   "hfov": 7.47,
   "distance": 100
  }
 ],
 "id": "overlay_647081C1_70D0_09EF_41D2_8BB160DA1111",
 "data": {
  "label": "Circle Arrow 06"
 },
 "maps": [
  {
   "yaw": -65.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_6113C3EE_7030_09B2_41D5_FB75B3986836_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.62,
   "hfov": 7.47
  }
 ],
 "rollOverDisplay": false
},
{
 "bleachingDistance": 0.4,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 26.21,
 "bleaching": 0.7,
 "id": "overlay_6C7D13CA_70F0_09FD_41C4_7F925C015940",
 "yaw": -14.17
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_5F766B5F_7070_1A92_41BC_DEEDAA979277, null, false)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4449D151_7070_06EE_41D4_89B170B1B91E",
   "pitch": 15.7,
   "yaw": -65.93,
   "hfov": 9.91,
   "distance": 100
  }
 ],
 "id": "overlay_5FCDD1DD_7070_0997_41BB_240A816B38BE",
 "data": {
  "label": "Info Red 05"
 },
 "maps": [
  {
   "yaw": -65.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_6113C3EE_7030_09B2_41D5_FB75B3986836_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 15.7,
   "hfov": 9.91
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_612604C0_7030_0FEE_41D9_370EBC10496C, this.camera_498DC719_71D0_0A9E_41DC_426DEB78E728); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5C98D0AD_70D0_07B6_41C1_1C90B01FDA02",
   "pitch": -9.46,
   "yaw": 13.48,
   "hfov": 21.65,
   "distance": 50
  }
 ],
 "id": "overlay_54A62C38_70F1_FE9E_41D5_45540BB73580",
 "data": {
  "label": "Arrow 05a Left-Up"
 },
 "maps": [
  {
   "yaw": 13.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_614CBDF2_7030_7992_41C2_BB897AB5B1C7_0_HS_0_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.46,
   "hfov": 21.65
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_614CF27D_7030_0A96_41C6_06C52E134CF9, this.camera_49809729_71D0_0ABF_41D7_4DE5451EF5B1); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5C9830AD_70D0_07B6_41C4_7E0C5F3D0009",
   "pitch": -4.1,
   "yaw": 89.21,
   "hfov": 15.93,
   "distance": 100
  }
 ],
 "id": "overlay_51B09374_70F0_0A95_41D9_BE07F43BE18E",
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "yaw": 89.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_614CBDF2_7030_7992_41C2_BB897AB5B1C7_0_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.1,
   "hfov": 15.93
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_614C1ABF_7030_1B92_41A9_03DA8BEB1A71, this.camera_48DFF91D_71D0_0697_41A4_4B884D4D0A70); this.mainPlayList.set('selectedIndex', 18)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4937F6CB_71D0_0BF3_41B8_D9D2029B6156",
   "pitch": -11.24,
   "yaw": -3.74,
   "hfov": 24.23,
   "distance": 100
  }
 ],
 "id": "overlay_5E87AA79_71D0_3A9F_41A0_9C434967793F",
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "yaw": -3.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_61D1159C_7030_0995_4184_9A9B9431557C_0_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.24,
   "hfov": 24.23
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_61D13DF1_7030_39AE_41D3_EAD082CFA389, this.camera_48C9C90D_71D0_0676_41BB_AAB39EE9FCEA); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_493026CB_71D0_0BF3_41CA_53FC77F1EF08",
   "pitch": -9.94,
   "yaw": 83.84,
   "hfov": 24.34,
   "distance": 100
  }
 ],
 "id": "overlay_42523059_71D0_069E_41BC_DB8A24785A81",
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "yaw": 83.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_61D1159C_7030_0995_4184_9A9B9431557C_0_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.94,
   "hfov": 24.34
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_6406AE10_70D0_3A6D_4196_BC641A174A02, this.camera_48EFC93C_71D0_0696_41C1_F35460849090); this.mainPlayList.set('selectedIndex', 25)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4930B6CB_71D0_0BF3_41BA_021BF8641262",
   "pitch": -11.21,
   "yaw": 177.8,
   "hfov": 18.46,
   "distance": 100
  }
 ],
 "id": "overlay_4690BB06_71D0_1A72_41D3_74905429FA1B",
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "yaw": 177.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_61D1159C_7030_0995_4184_9A9B9431557C_0_HS_2_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.21,
   "hfov": 18.46
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_614CF795_7030_0997_41B3_3DD2AB366E34, this.camera_48233852_71D0_06ED_41BC_BB0D20A1EF2F); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_61EDD171_7030_06AF_41D3_42DC820009C2_1_HS_0_0.png",
      "width": 137,
      "class": "ImageResourceLevel",
      "height": 142
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.47,
   "yaw": 177.71
  }
 ],
 "id": "overlay_62750647_70D0_0AF2_41CC_E8163D83FEDC",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "yaw": 177.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_61EDD171_7030_06AF_41D3_42DC820009C2_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.47,
   "hfov": 5.23
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 18)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.99,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_61EDD171_7030_06AF_41D3_42DC820009C2_1_HS_1_0.png",
      "width": 131,
      "class": "ImageResourceLevel",
      "height": 114
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.38,
   "yaw": -4.26
  }
 ],
 "id": "overlay_633D9B17_70D0_FA92_41DB_828B9CB938A0",
 "data": {
  "label": "Image"
 },
 "maps": [
  {
   "yaw": -4.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_61EDD171_7030_06AF_41D3_42DC820009C2_1_HS_1_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.38,
   "hfov": 4.99
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_52843C9A_70F0_1F9D_41C0_9D49D79878C9",
   "pitch": 4.5,
   "yaw": -95.92,
   "hfov": 9.52,
   "distance": 100
  }
 ],
 "id": "overlay_651A0520_70D0_0EAE_41CD_72BDC6208ADD",
 "data": {
  "label": "Circle Generic 03"
 },
 "maps": [
  {
   "yaw": -95.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_61EDD171_7030_06AF_41D3_42DC820009C2_1_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 4.5,
   "hfov": 9.52
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_671B230E_70D0_0A75_41BA_A6A37C518D6D, this.camera_49C147AB_71D0_09B2_419D_0D9AB58BE238); this.mainPlayList.set('selectedIndex', 27)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_52BB0C9A_70F0_1F9D_41D1_349F9A43D0FD",
   "pitch": 1.4,
   "yaw": 23.52,
   "hfov": 7.45,
   "distance": 100
  }
 ],
 "id": "overlay_661BB2E7_70D0_0BB2_41DB_3B25B12B3D5A",
 "data": {
  "label": "Circle Arrow 06"
 },
 "maps": [
  {
   "yaw": 23.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_66A04E04_70D0_1A76_41AA_92879A22AB62_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.4,
   "hfov": 7.45
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_52BBFC9A_70F0_1F9D_41C5_C86D65B648D4",
   "pitch": -3.1,
   "yaw": 1.69,
   "hfov": 8.33,
   "distance": 100
  }
 ],
 "id": "overlay_6986DAD1_70F0_1BEE_41CF_1481DBF94A7C",
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "yaw": 1.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_66A04E04_70D0_1A76_41AA_92879A22AB62_1_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.1,
   "hfov": 8.33
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_6406AE10_70D0_3A6D_4196_BC641A174A02, this.camera_49D5C7B9_71D0_099F_4196_BDE3E2655717); this.mainPlayList.set('selectedIndex', 25)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_52B85C9A_70F0_1F9D_41D3_85F3CDDF33FF",
   "pitch": -8.16,
   "yaw": -89.73,
   "hfov": 11.89,
   "distance": 100
  }
 ],
 "id": "overlay_69F945E6_70F0_09B2_41D9_AEEF586FF3E8",
 "data": {
  "label": "Arrow 06"
 },
 "maps": [
  {
   "yaw": -89.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_66A04E04_70D0_1A76_41AA_92879A22AB62_1_HS_2_0_0_map.gif",
      "width": 30,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.16,
   "hfov": 11.89
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_622C1750_7030_0AED_41D9_3C3EECC85056, this.camera_4B1DA96B_71D0_06B2_419C_A71D009B1782); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5C9A60AD_70D0_07B6_41DB_DFBA7CDCA21F",
   "pitch": -2.81,
   "yaw": -1.53,
   "hfov": 8.48,
   "distance": 100
  }
 ],
 "id": "overlay_6EDA199F_70F0_F993_41B1_49E841735A54",
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "yaw": -1.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_61E6D356_7030_0A95_41B1_5F8087399D42_0_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.81,
   "hfov": 8.48
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_614C106B_7030_06B3_41D0_8DB05C9F0A0D, this.camera_400E8AE3_71D0_3BB3_41B2_A81434CFAFD5); this.mainPlayList.set('selectedIndex', 24)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5C9A50AD_70D0_07B6_41D1_81A61C9ECBBC",
   "pitch": -2.95,
   "yaw": -104.43,
   "hfov": 8.48,
   "distance": 100
  }
 ],
 "id": "overlay_6E44DB93_70F0_1992_41D3_50C091116211",
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "yaw": -104.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_61E6D356_7030_0A95_41B1_5F8087399D42_0_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.95,
   "hfov": 8.48
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_61E6D356_7030_0A95_41B1_5F8087399D42, this.camera_402A0B6F_71D0_3AB2_41DB_E23ECFDD23F3); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5C8570AD_70D0_07B6_41A1_9445DDCBAC95",
   "pitch": -4.83,
   "yaw": 104.15,
   "hfov": 18.6,
   "distance": 100
  }
 ],
 "id": "overlay_6EBFD750_70F0_0AED_41D0_66F2BEBE8AF4",
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "yaw": 104.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_622C1750_7030_0AED_41D9_3C3EECC85056_0_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.83,
   "hfov": 18.6
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_614C5F4E_7030_1AF2_41C0_9F81F6E6026B, this.camera_48BA38FE_71D0_0795_41D2_86EA86AFBCC0); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5C9B70AD_70D0_07B6_41D2_ED40F555861A",
   "pitch": -9.69,
   "yaw": 34.7,
   "hfov": 13.16,
   "distance": 50
  }
 ],
 "id": "overlay_50EC341E_70F0_0E92_41C1_B4272549D4F6",
 "data": {
  "label": "Arrow 05a Left"
 },
 "maps": [
  {
   "yaw": 34.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_612604C0_7030_0FEE_41D9_370EBC10496C_0_HS_0_0_0_map.gif",
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.69,
   "hfov": 13.16
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_614CBDF2_7030_7992_41C2_BB897AB5B1C7, this.camera_48ABE8EE_71D0_07B2_41D4_6C57823FA760); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5C98B0AD_70D0_07B6_41A2_ECDDFACFA25E",
   "pitch": -9.7,
   "yaw": 72.29,
   "hfov": 14.36,
   "distance": 50
  }
 ],
 "id": "overlay_50F00E69_70F0_1ABF_41BB_85813D8137C5",
 "data": {
  "label": "Arrow 05a Right"
 },
 "maps": [
  {
   "yaw": 72.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_612604C0_7030_0FEE_41D9_370EBC10496C_0_HS_1_0_0_map.gif",
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.7,
   "hfov": 14.36
  }
 ],
 "rollOverDisplay": false
},
{
 "id": "htmlText_5E868D6C_7050_1EB6_41D5_BBA1FA8C6CEA",
 "paddingLeft": 10,
 "width": "100%",
 "class": "HTMLText",
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "paddingRight": 10,
 "minWidth": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">FED BLOCK </SPAN></DIV></div>",
 "data": {
  "name": "HTMLText92435"
 },
 "paddingTop": 10,
 "height": "100%"
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_671B230E_70D0_0A75_41BA_A6A37C518D6D, this.camera_4866C8A0_71D0_07AD_41C3_52C8564B6CF5); this.mainPlayList.set('selectedIndex', 27)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_52B91C9A_70F0_1F9D_41D4_63B74D1C3D5A",
   "pitch": -7.95,
   "yaw": -0.11,
   "hfov": 7.6,
   "distance": 100
  }
 ],
 "id": "overlay_6828EB06_70F0_1A75_41A9_45C6E34AE7CF",
 "data": {
  "label": "Circle Arrow 06"
 },
 "maps": [
  {
   "yaw": -0.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_6710066B_70D0_0AB2_41DB_186ACDD84803_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.95,
   "hfov": 7.6
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5C9310B3_70D0_0793_41D4_130E8212DA2F",
   "pitch": -4.57,
   "yaw": -179.98,
   "hfov": 19.59,
   "distance": 100
  }
 ],
 "id": "overlay_56FA5D2B_70D0_1EB2_418D_A3715769C54E",
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "yaw": -179.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_614C1ABF_7030_1B92_41A9_03DA8BEB1A71_0_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.57,
   "hfov": 19.59
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_61D1159C_7030_0995_4184_9A9B9431557C, this.camera_4B0DC95B_71D0_0692_41CD_4D1A64E8DB30); this.mainPlayList.set('selectedIndex', 19)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5C90E0B3_70D0_0793_41D0_112489690B14",
   "pitch": -7.44,
   "yaw": -92.99,
   "hfov": 9.33,
   "distance": 100
  }
 ],
 "id": "overlay_5935939B_70D0_0993_41D9_14CC0F7FD8E2",
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "yaw": -92.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_614C1ABF_7030_1B92_41A9_03DA8BEB1A71_0_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.44,
   "hfov": 9.33
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_614C7114_7030_0695_41D4_F33CF326C756, this.camera_48FFB94C_71D0_06F5_41C8_CFBFC601E77F); this.mainPlayList.set('selectedIndex', 20)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5C9380B3_70D0_0793_41D0_4B1EC018F93A",
   "pitch": -3.35,
   "yaw": -89.11,
   "hfov": 5.99,
   "distance": 50
  }
 ],
 "id": "overlay_590511F5_70D0_0996_41A5_7740DB3304FD",
 "data": {
  "label": "Arrow 05a Right"
 },
 "maps": [
  {
   "yaw": -89.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_614C1ABF_7030_1B92_41A9_03DA8BEB1A71_0_HS_2_0_0_map.gif",
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.35,
   "hfov": 5.99
  }
 ],
 "rollOverDisplay": false
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_5D1292BD_7050_0B96_41DA_FEFAAF82BEC9, null, false)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5E194504_7070_0E75_41D6_3E0F10098D42",
   "pitch": 12.75,
   "yaw": -134.08,
   "hfov": 11.92,
   "distance": 100
  }
 ],
 "id": "overlay_5D825AB1_7050_3BAE_41BF_28C2A719552B",
 "data": {
  "label": "Info Red 04"
 },
 "maps": [
  {
   "yaw": -134.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_614C1ABF_7030_1B92_41A9_03DA8BEB1A71_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 12.75,
   "hfov": 11.92
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_61EDD171_7030_06AF_41D3_42DC820009C2, this.camera_489498CF_71D0_07F3_41D2_09F941FA740A); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5C9CC0B3_70D0_0793_41D3_2805A2ED3DB0",
   "pitch": -6.35,
   "yaw": -54.04,
   "hfov": 15.06,
   "distance": 100
  }
 ],
 "id": "overlay_548673C6_70D0_09F5_41B0_8C2E0E2F6EEE",
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "yaw": -54.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_614CF795_7030_0997_41B3_3DD2AB366E34_0_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.35,
   "hfov": 15.06
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_614FCB21_7030_3AAF_41D1_43AC52AA330E, this.camera_4884F8BF_71D0_0792_41CA_169B2D07CD6A); this.mainPlayList.set('selectedIndex', 22)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5C9C60B3_70D0_0793_41DA_B80690BB6030",
   "pitch": -7.21,
   "yaw": -151.32,
   "hfov": 13.73,
   "distance": 100
  }
 ],
 "id": "overlay_5419BB20_70D0_7AAD_418D_BB028EAD5794",
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "yaw": -151.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_614CF795_7030_0997_41B3_3DD2AB366E34_0_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.21,
   "hfov": 13.73
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_614C106B_7030_06B3_41D0_8DB05C9F0A0D, this.camera_487698AF_71D0_07B2_41D0_846CD34B5DCD); this.mainPlayList.set('selectedIndex', 24)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5C9D80B3_70D0_0793_41C4_10C75E807117",
   "pitch": -5.65,
   "yaw": 33.6,
   "hfov": 6.98,
   "distance": 100
  }
 ],
 "id": "overlay_55E71280_70D0_0A6E_41C7_5493E385D96E",
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "yaw": 33.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_614CF795_7030_0997_41B3_3DD2AB366E34_0_HS_2_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.65,
   "hfov": 6.98
  }
 ],
 "rollOverDisplay": false
},
{
 "id": "htmlText_5F68DB5F_7070_1A92_41AF_C10857E71F89",
 "paddingLeft": 10,
 "width": "100%",
 "class": "HTMLText",
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "paddingRight": 10,
 "minWidth": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Montserrat Light';\">Welcome to our Virtual Tour </SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Montserrat Light';\">Presented by 2021- 2022 batch students of KLU CSE</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Montserrat Light';\">We are the part of DTI batch-7 of section-02 in !st year</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Montserrat Light';\">our batch members are:</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Montserrat Light';\">2100032064-CH.VINAY(leader)</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Montserrat Light';\">2100031891-D.Suresh</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Montserrat Light';\">2100031660-Kalayan</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Montserrat Light';\">2100031846-G.Bindu Sriniveni</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Montserrat Light';\">2100031632-Y.Manaswini</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Montserrat Light';\">2100031672-Veera Madhu</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Montserrat Light';\">2100031579-R. Venkatesh babu</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Montserrat Light';\">2100031594-M.Yashwanth Sai</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Montserrat Light';\">2100031595-k.Harshith Ram</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Montserrat Light';\">2100031583-D.Srinivas</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-family:'Montserrat Light';\">SIt back...Relax ..and enjoy our Virtual Tour</SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText101191"
 },
 "paddingTop": 10,
 "height": "100%"
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_61E53F0E_7030_1A72_41D2_A1A6F5E13379, this.camera_49CE0796_71D0_0992_41CE_5A3C1A3F5F22); this.mainPlayList.set('selectedIndex', 21)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5C99A0B2_70D0_0792_41D1_25CA1A4F4353",
   "pitch": -13.19,
   "yaw": 71.24,
   "hfov": 26.99,
   "distance": 50
  }
 ],
 "id": "overlay_52E55A47_70D0_3AF3_41A3_52603495779E",
 "data": {
  "label": "Arrow 05b Left"
 },
 "maps": [
  {
   "yaw": 71.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_61F6A83C_7030_0695_41D8_64A6B2C7ED3A_0_HS_0_0_0_map.gif",
      "width": 48,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.19,
   "hfov": 26.99
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 22)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5C99C0B2_70D0_0792_41B0_6F5E06DA5F41",
   "pitch": 2.55,
   "yaw": -58.4,
   "hfov": 7.57,
   "distance": 100
  }
 ],
 "id": "overlay_5129C7D0_70D0_09EE_41C2_FEFAB3C6F275",
 "data": {
  "label": "Circle Arrow 06"
 },
 "maps": [
  {
   "yaw": -58.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_61F6A83C_7030_0695_41D8_64A6B2C7ED3A_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.55,
   "hfov": 7.57
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_61D1159C_7030_0995_4184_9A9B9431557C, this.camera_403CDB8F_71D0_3A73_41D4_0AFC5321D313); this.mainPlayList.set('selectedIndex', 19)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_52BA2C9A_70F0_1F9D_41C1_3550D3EDBF23",
   "pitch": 5.95,
   "yaw": -3.21,
   "hfov": 7.61,
   "distance": 100
  }
 ],
 "id": "overlay_65B80AAF_70D0_1BB3_41D5_EA0568B9C702",
 "data": {
  "label": "Circle Arrow 06"
 },
 "maps": [
  {
   "yaw": -3.21,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_6406AE10_70D0_3A6D_4196_BC641A174A02_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 5.95,
   "hfov": 7.61
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_66A04E04_70D0_1A76_41AA_92879A22AB62, this.camera_40205B7F_71D0_3A93_41D0_3AF5555675F6); this.mainPlayList.set('selectedIndex', 26)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_52BA9C9A_70F0_1F9D_4182_E871B8100EF3",
   "pitch": 2.78,
   "yaw": 82.39,
   "hfov": 7.64,
   "distance": 100
  }
 ],
 "id": "overlay_652339C3_70D0_79F3_41CF_C6D7006369B6",
 "data": {
  "label": "Circle Arrow 06"
 },
 "maps": [
  {
   "yaw": 82.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_6406AE10_70D0_3A6D_4196_BC641A174A02_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.78,
   "hfov": 7.64
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_614FCB21_7030_3AAF_41D1_43AC52AA330E, this.camera_40177B50_71D0_3AEE_41BB_71BD0A0591E7); this.mainPlayList.set('selectedIndex', 22)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5C92F0B3_70D0_0793_41D0_9EBCE7EADE26",
   "pitch": -17.55,
   "yaw": 10.55,
   "hfov": 24.17,
   "distance": 50
  }
 ],
 "id": "overlay_56C2A780_70D0_0A6E_41D3_CB9E770B57F3",
 "data": {
  "label": "Arrow 05a Right-Up"
 },
 "maps": [
  {
   "yaw": 10.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_614CBB82_7030_FA72_41DB_3593A530EE19_0_HS_0_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -17.55,
   "hfov": 24.17
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_61D13DF1_7030_39AE_41D3_EAD082CFA389, this.camera_402D8B60_71D0_3AAD_41D7_05A2D86A639F); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5C9270B3_70D0_0793_41C1_BE396877E38B",
   "pitch": -14.13,
   "yaw": 125.57,
   "hfov": 23.96,
   "distance": 100
  }
 ],
 "id": "overlay_5AA390C1_70D0_07EF_41D1_28AC1B62B68C",
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "yaw": 125.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_614CBB82_7030_FA72_41DB_3593A530EE19_0_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -14.13,
   "hfov": 23.96
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_6710066B_70D0_0AB2_41DB_186ACDD84803, this.camera_48059813_71D0_0692_41CB_5BE6DA9201DA); this.mainPlayList.set('selectedIndex', 28)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_52B8CC9A_70F0_1F9D_41D3_EC6274DBF477",
   "pitch": -7,
   "yaw": -93.59,
   "hfov": 7.51,
   "distance": 100
  }
 ],
 "id": "overlay_67EC1F14_70D0_1A96_41C7_EC2193EA3663",
 "data": {
  "label": "Circle Arrow 06"
 },
 "maps": [
  {
   "yaw": -93.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_671B230E_70D0_0A75_41BA_A6A37C518D6D_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7,
   "hfov": 7.51
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_66A04E04_70D0_1A76_41AA_92879A22AB62, this.camera_481A3823_71D0_06B3_41C2_8F2A5FC52AB6); this.mainPlayList.set('selectedIndex', 26)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_52B8BC9A_70F0_1F9D_41B6_4364B91FBAEE",
   "pitch": 10.76,
   "yaw": 55.22,
   "hfov": 10.11,
   "distance": 100
  }
 ],
 "id": "overlay_674B4DB1_70F0_19AF_41C8_484D4E04AA6E",
 "data": {
  "label": "Circle Arrow 06"
 },
 "maps": [
  {
   "yaw": 55.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_671B230E_70D0_0A75_41BA_A6A37C518D6D_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 10.76,
   "hfov": 10.11
  }
 ],
 "rollOverDisplay": false
},
{
 "bleachingDistance": 0.4,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 27.64,
 "bleaching": 0.7,
 "id": "overlay_5B606145_7030_06F6_41B3_40E3385CF617",
 "yaw": 96.74
},
{
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showWindow(this.window_5E84BD6C_7050_1EB6_41CD_034317F630A8, null, false)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5E060504_7070_0E75_41AE_91D32C76F18C",
   "pitch": 19.54,
   "yaw": -93.59,
   "hfov": 9.7,
   "distance": 100
  }
 ],
 "id": "overlay_5D144997_7050_1992_41D9_315577374A89",
 "data": {
  "label": "Info Red 02"
 },
 "maps": [
  {
   "yaw": -93.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_671B230E_70D0_0A75_41BA_A6A37C518D6D_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 19.54,
   "hfov": 9.7
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_612604C0_7030_0FEE_41D9_370EBC10496C, this.camera_49755709_71D0_0A7E_41CD_D5AA9B4CA4C6); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5C9BC0AD_70D0_07B6_41CF_1A6561BFF158",
   "pitch": -15.5,
   "yaw": -62.61,
   "hfov": 21.7,
   "distance": 50
  }
 ],
 "id": "overlay_501B7D29_70F0_FEBE_41B5_A39F8AD3BE43",
 "data": {
  "label": "Arrow 05a Right-Up"
 },
 "maps": [
  {
   "yaw": -62.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_614C5F4E_7030_1AF2_41C0_9F81F6E6026B_0_HS_0_0_0_map.gif",
      "width": 24,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -15.5,
   "hfov": 21.7
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_614CBDF2_7030_7992_41C2_BB897AB5B1C7, this.camera_49EA77C5_71D0_09F6_41CE_D5AE90ECE075); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5C9940B2_70D0_0792_41CD_1C571FA98D69",
   "pitch": -6.52,
   "yaw": -178.39,
   "hfov": 20.2,
   "distance": 100
  }
 ],
 "id": "overlay_527EBF41_70D0_1AEE_41DB_D50070CE01A2",
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "yaw": -178.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_614CF27D_7030_0A96_41C6_06C52E134CF9_0_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.52,
   "hfov": 20.2
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_61D13DF1_7030_39AE_41D3_EAD082CFA389, this.camera_49FD77E4_71D0_09B6_41D0_ADAE1878FE95); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5C9E80B3_70D0_0793_41BE_3C267D76B89B",
   "pitch": -8.58,
   "yaw": -0.57,
   "hfov": 9.07,
   "distance": 100
  }
 ],
 "id": "overlay_53CAAA92_70D0_7A6D_4190_4BDAF5FFA35C",
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "yaw": -0.57,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_614CF27D_7030_0A96_41C6_06C52E134CF9_0_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.58,
   "hfov": 9.07
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_614FCB21_7030_3AAF_41D1_43AC52AA330E, this.camera_49F217F4_71D0_0996_41D5_29F2E10E29DB); this.mainPlayList.set('selectedIndex', 22)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5C9E20B3_70D0_0793_41DB_0D424B2B03DD",
   "pitch": -4.88,
   "yaw": 89.7,
   "hfov": 8.51,
   "distance": 100
  }
 ],
 "id": "overlay_52D59060_70D0_06AE_419B_DA73E1ADF07C",
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "yaw": 89.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_614CF27D_7030_0A96_41C6_06C52E134CF9_0_HS_2_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.88,
   "hfov": 8.51
  }
 ],
 "rollOverDisplay": false
},
{
 "id": "htmlText_5D2337F0_7050_09AD_41CE_671495F49CB1",
 "paddingLeft": 10,
 "width": "100%",
 "class": "HTMLText",
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "paddingRight": 10,
 "minWidth": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><B>RND Block </B></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText84839"
 },
 "paddingTop": 10,
 "height": "100%"
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_614C1ABF_7030_1B92_41A9_03DA8BEB1A71, this.camera_482D6832_71D0_0692_41D8_581D80FF110A); this.mainPlayList.set('selectedIndex', 18)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4CE98177_7030_0692_41C7_F17A77137EFF",
   "pitch": -8.98,
   "yaw": 0.72,
   "hfov": 14.85,
   "distance": 100
  }
 ],
 "id": "overlay_58ED1806_70D0_0672_41B9_7C3729A417C3",
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "yaw": 0.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_614C7114_7030_0695_41D4_F33CF326C756_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.98,
   "hfov": 14.85
  }
 ],
 "rollOverDisplay": false
},
{
 "bleachingDistance": 0.4,
 "class": "LensFlarePanoramaOverlay",
 "pitch": 22.74,
 "bleaching": 0.75,
 "id": "overlay_5B29E395_7030_0997_41CF_444B1CB7401A",
 "yaw": 98.39
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_61E6D356_7030_0A95_41B1_5F8087399D42, this.camera_40194B31_71D0_3AAF_41D9_68821454E6B9); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5285FC9A_70F0_1F9D_41D5_497BED1B6B9A",
   "pitch": -4,
   "yaw": 85.42,
   "hfov": 14.02,
   "distance": 100
  }
 ],
 "id": "overlay_6AE97E70_70F0_3AAD_41D5_F62D8D5519E9",
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "yaw": 85.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_614C106B_7030_06B3_41D0_8DB05C9F0A0D_1_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4,
   "hfov": 14.02
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_614CF795_7030_0997_41B3_3DD2AB366E34, this.camera_401CAB21_71D0_3AAE_41D6_358ACDDEC1FE); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_52BA5C9A_70F0_1F9D_41AC_FAAE7876FB9C",
   "pitch": -3.7,
   "yaw": -97.08,
   "hfov": 8.47,
   "distance": 100
  }
 ],
 "id": "overlay_6A09FF05_70F0_1A76_41D7_D9634E7B92FC",
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "yaw": -97.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_614C106B_7030_06B3_41D0_8DB05C9F0A0D_1_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.7,
   "hfov": 8.47
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_614CBB82_7030_FA72_41DB_3593A530EE19, this.camera_4840A871_71D0_06AE_41C7_AD25508813D6); this.mainPlayList.set('selectedIndex', 11)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5C9E40B3_70D0_0793_41C7_39E15FC7F11C",
   "pitch": -10,
   "yaw": -89.13,
   "hfov": 16.81,
   "distance": 100
  }
 ],
 "id": "overlay_5278587B_70D0_0692_41CB_6DDB542E1DAC",
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "yaw": -89.13,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_61D13DF1_7030_39AE_41D3_EAD082CFA389_0_HS_0_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10,
   "hfov": 16.81
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_614CF27D_7030_0A96_41C6_06C52E134CF9, this.camera_4832D861_71D0_06AE_41B3_7D74117C380C); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5C9FE0B3_70D0_0793_41D9_7E374731DBDC",
   "pitch": -7.21,
   "yaw": 0.29,
   "hfov": 11.26,
   "distance": 100
  }
 ],
 "id": "overlay_54BA8755_70D0_0A96_41CE_26ED8A6F663B",
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "yaw": 0.29,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_61D13DF1_7030_39AE_41D3_EAD082CFA389_0_HS_1_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.21,
   "hfov": 11.26
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 27)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5C9F00B3_70D0_0793_41BD_C73040D655D8",
   "pitch": -6.69,
   "yaw": 85.86,
   "hfov": 16.77,
   "distance": 100
  }
 ],
 "id": "overlay_53B32250_70D0_0AEE_41C8_BC0B91C8D90C",
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "yaw": 85.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_61D13DF1_7030_39AE_41D3_EAD082CFA389_0_HS_2_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.69,
   "hfov": 16.77
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_61D1159C_7030_0995_4184_9A9B9431557C, this.camera_48504881_71D0_066F_41D7_F59637145447); this.mainPlayList.set('selectedIndex', 19)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_5C9CA0B3_70D0_0793_41C4_28CAB9BC9803",
   "pitch": -5.52,
   "yaw": 179.56,
   "hfov": 11.54,
   "distance": 100
  }
 ],
 "id": "overlay_542EF1BB_70D0_0992_41C1_E399AC50C37A",
 "data": {
  "label": "Arrow 04c"
 },
 "maps": [
  {
   "yaw": 179.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_61D13DF1_7030_39AE_41D3_EAD082CFA389_0_HS_3_0_0_map.gif",
      "width": 38,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.52,
   "hfov": 11.54
  }
 ],
 "rollOverDisplay": false
},
{
 "id": "htmlText_5D1362BD_7050_0B96_41D5_B8530EA54872",
 "paddingLeft": 10,
 "width": "100%",
 "class": "HTMLText",
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "scrollBarColor": "#000000",
 "paddingRight": 10,
 "minWidth": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">Library Block</SPAN></DIV></div>",
 "data": {
  "name": "HTMLText90079"
 },
 "paddingTop": 10,
 "height": "100%"
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_61F6A83C_7030_0695_41D8_64A6B2C7ED3A, this.camera_4006CB12_71D0_3A6D_41C3_C350B84AC4F6); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4CEA0177_7030_0692_41D5_AB9E38507226",
   "pitch": -6.14,
   "yaw": -101.33,
   "hfov": 10.47,
   "distance": 50
  }
 ],
 "id": "overlay_5973E360_70D0_0AAE_41C1_60C5EC1BC39A",
 "data": {
  "label": "Arrow 05b Right"
 },
 "maps": [
  {
   "yaw": -101.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_61E53F0E_7030_1A72_41D2_A1A6F5E13379_1_HS_0_0_0_map.gif",
      "width": 48,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.14,
   "hfov": 10.47
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 22)"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_4CEA7177_7030_0692_41D0_E8DFEB561E33",
   "pitch": 11.63,
   "yaw": 24.74,
   "hfov": 10.08,
   "distance": 100
  }
 ],
 "id": "overlay_594A85E6_70D0_09B2_41C8_9356376E5FA5",
 "data": {
  "label": "Circle Arrow 06"
 },
 "maps": [
  {
   "yaw": 24.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_61E53F0E_7030_1A72_41D2_A1A6F5E13379_1_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 11.63,
   "hfov": 10.08
  }
 ],
 "rollOverDisplay": false
},
{
 "maxHeight": 123,
 "id": "Image_5F5B362B_7050_0AB3_41CF_3EE4B5A8B5CA",
 "left": "0%",
 "paddingLeft": 0,
 "width": "100%",
 "scaleMode": "fit_inside",
 "class": "Image",
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "url": "skin/Image_5F5B362B_7050_0AB3_41CF_3EE4B5A8B5CA.png",
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "top": "0%",
 "bottom": "7.22%",
 "borderSize": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "horizontalAlign": "center",
 "data": {
  "name": "Image94768"
 },
 "paddingTop": 0,
 "maxWidth": 492
},
{
 "textDecoration": "none",
 "fontFamily": "Montserrat",
 "id": "Label_0E9CEE5D_36F3_E64E_419C_5A94FA5D3CA1",
 "left": 76,
 "paddingLeft": 0,
 "width": 450,
 "class": "Label",
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "minHeight": 1,
 "text": "KLU Virtual Tour",
 "propagateClick": false,
 "verticalAlign": "middle",
 "top": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "fontSize": 31,
 "horizontalAlign": "left",
 "fontColor": "#FFFFFF",
 "fontStyle": "normal",
 "height": 60,
 "data": {
  "name": "Label Company Name"
 },
 "paddingTop": 0,
 "fontWeight": "normal"
},
{
 "maxHeight": 30,
 "id": "Image_05314BAF_3AA1_A6F2_41CB_86A11240FA50",
 "left": 30,
 "paddingLeft": 0,
 "width": "3.14%",
 "scaleMode": "fit_inside",
 "class": "Image",
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "url": "skin/Image_05314BAF_3AA1_A6F2_41CB_86A11240FA50.png",
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "top": "0%",
 "bottom": "0%",
 "borderSize": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "click": "this.openLink('http://klumaps.ml', '_blank')",
 "horizontalAlign": "center",
 "data": {
  "name": "logo"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 40
},
{
 "children": [
  "this.Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89"
 ],
 "id": "Container_0542AAAA_3AA3_A6F3_41B2_0E208ADBBBE1",
 "paddingLeft": 0,
 "width": 1199,
 "class": "Container",
 "shadow": false,
 "borderRadius": 0,
 "right": "0%",
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "propagateClick": true,
 "verticalAlign": "middle",
 "top": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingRight": 15,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "right",
 "gap": 3,
 "scrollBarMargin": 2,
 "height": 60,
 "contentOpaque": false,
 "data": {
  "name": "-button set container"
 },
 "paddingTop": 0,
 "layout": "horizontal",
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 101,
 "id": "IconButton_7B21DC51_3AA0_A251_41B1_CEAABC2475F8",
 "paddingLeft": 0,
 "width": 44,
 "class": "IconButton",
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_7B21DC51_3AA0_A251_41B1_CEAABC2475F8.png",
 "rollOverIconURL": "skin/IconButton_7B21DC51_3AA0_A251_41B1_CEAABC2475F8_rollover.png",
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "minWidth": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "horizontalAlign": "center",
 "height": 44,
 "data": {
  "name": "IconButton Thumblist"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 101
},
{
 "maxHeight": 101,
 "id": "IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0",
 "paddingLeft": 0,
 "width": 44,
 "class": "IconButton",
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0.png",
 "rollOverIconURL": "skin/IconButton_7B21CC51_3AA0_A251_41C9_1ABF5F74EDA0_rollover.png",
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "minWidth": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "mode": "push",
 "click": "this.openLink('https://www.google.com/maps/dir//klu/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3a35f0a2a7d81943:0x8ba5d78f65df94b8?sa=X&ved=2ahUKEwjG38LSi7f3AhU9SWwGHe9sAPsQ9Rd6BAhYEAU', '_blank')",
 "horizontalAlign": "center",
 "height": 44,
 "data": {
  "name": "IconButton Location"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 101
},
{
 "maxHeight": 101,
 "id": "IconButton_7B21FC51_3AA0_A251_41CC_46CDE74591EA",
 "paddingLeft": 0,
 "width": 44,
 "class": "IconButton",
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_7B21FC51_3AA0_A251_41CC_46CDE74591EA.png",
 "rollOverIconURL": "skin/IconButton_7B21FC51_3AA0_A251_41CC_46CDE74591EA_rollover.png",
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "transparencyActive": true,
 "minWidth": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "mode": "push",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, true, 0, null, null, false)",
 "horizontalAlign": "center",
 "height": 44,
 "data": {
  "name": "IconButton Photoalbum"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 101
},
{
 "layout": "horizontal",
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_26D3A42C_3F86_BA30_419B_2C6BE84D2718",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "scrollBarOpacity": 0.5,
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "15%",
 "paddingLeft": 0,
 "class": "Container",
 "shadow": true,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "15%",
 "backgroundOpacity": 1,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "propagateClick": false,
 "shadowColor": "#000000",
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "bottom": "10%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "contentOpaque": false,
 "shadowHorizontalLength": 0,
 "paddingTop": 0,
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "shadowSpread": 1
},
{
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "15%",
 "paddingLeft": 0,
 "class": "Container",
 "shadow": false,
 "borderRadius": 0,
 "right": "15%",
 "backgroundOpacity": 0,
 "overflow": "visible",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "top",
 "top": "10%",
 "bottom": "80%",
 "scrollBarColor": "#000000",
 "paddingRight": 20,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "right",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "data": {
  "name": "Container X global"
 },
 "paddingTop": 20,
 "layout": "vertical"
},
{
 "layout": "absolute",
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "scrollBarOpacity": 0.5,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "paddingLeft": 0,
 "class": "Container",
 "shadow": true,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "15%",
 "backgroundOpacity": 1,
 "overflow": "visible",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "propagateClick": false,
 "shadowColor": "#000000",
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "bottom": "10%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "contentOpaque": false,
 "shadowHorizontalLength": 0,
 "paddingTop": 0,
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "shadowSpread": 1
},
{
 "layout": "horizontal",
 "children": [
  "this.WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA"
 ],
 "scrollBarOpacity": 0.5,
 "id": "Container_221C1648_0C06_E5FD_4180_8A2E8B66315E",
 "left": "15%",
 "paddingLeft": 0,
 "class": "Container",
 "shadow": true,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "15%",
 "backgroundOpacity": 1,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "propagateClick": false,
 "shadowColor": "#000000",
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "bottom": "10%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "contentOpaque": false,
 "shadowHorizontalLength": 0,
 "paddingTop": 0,
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "shadowSpread": 1
},
{
 "children": [
  "this.IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF"
 ],
 "id": "Container_221B3648_0C06_E5FD_4199_FCE031AE003B",
 "left": "15%",
 "paddingLeft": 0,
 "class": "Container",
 "shadow": false,
 "borderRadius": 0,
 "right": "15%",
 "backgroundOpacity": 0,
 "overflow": "visible",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "top",
 "top": "10%",
 "bottom": "80%",
 "scrollBarColor": "#000000",
 "paddingRight": 20,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "right",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "data": {
  "name": "Container X global"
 },
 "paddingTop": 20,
 "layout": "vertical"
},
{
 "layout": "absolute",
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "scrollBarOpacity": 0.5,
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "paddingLeft": 0,
 "class": "Container",
 "shadow": true,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "15%",
 "backgroundOpacity": 1,
 "overflow": "visible",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "propagateClick": false,
 "shadowColor": "#000000",
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "bottom": "10%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "contentOpaque": false,
 "shadowHorizontalLength": 0,
 "paddingTop": 0,
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "shadowSpread": 1
},
{
 "layout": "vertical",
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "scrollBarOpacity": 0.5,
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "paddingLeft": 0,
 "class": "Container",
 "shadow": true,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "15%",
 "backgroundOpacity": 1,
 "overflow": "visible",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "propagateClick": false,
 "shadowColor": "#000000",
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "bottom": "10%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "contentOpaque": false,
 "shadowHorizontalLength": 0,
 "paddingTop": 0,
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "shadowSpread": 1
},
{
 "layout": "horizontal",
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_27875147_3F82_7A70_41CC_C0FFBB32BEFD",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "scrollBarOpacity": 0.5,
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "15%",
 "paddingLeft": 0,
 "class": "Container",
 "shadow": true,
 "borderRadius": 0,
 "shadowOpacity": 0.3,
 "right": "15%",
 "backgroundOpacity": 1,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "propagateClick": false,
 "shadowColor": "#000000",
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "top": "10%",
 "bottom": "10%",
 "minWidth": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowVerticalLength": 0,
 "contentOpaque": false,
 "shadowHorizontalLength": 0,
 "paddingTop": 0,
 "shadowBlurRadius": 25,
 "data": {
  "name": "Global"
 },
 "shadowSpread": 1
},
{
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "15%",
 "paddingLeft": 0,
 "class": "Container",
 "shadow": false,
 "borderRadius": 0,
 "right": "15%",
 "backgroundOpacity": 0,
 "overflow": "visible",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "top",
 "top": "10%",
 "bottom": "80%",
 "scrollBarColor": "#000000",
 "paddingRight": 20,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "right",
 "gap": 10,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "data": {
  "name": "Container X global"
 },
 "paddingTop": 20,
 "layout": "vertical"
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_4CE46177_7030_0692_41CB_B6FEAE2DA688",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_61ED06C2_7030_0BED_41DA_62A6B0B3CB98_1_HS_0_0.png",
   "width": 720,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_4CE4F177_7030_0692_41D8_7C1FC492FBCA",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_61ED06C2_7030_0BED_41DA_62A6B0B3CB98_1_HS_1_0.png",
   "width": 720,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_423B7754_7050_0A95_41D4_432B8BDAD98A",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_61ED06C2_7030_0BED_41DA_62A6B0B3CB98_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "id": "AnimatedImageResource_4CEAF177_7030_0692_41B8_806D2D95132B",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_614FCB21_7030_3AAF_41D1_43AC52AA330E_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_4CEB3177_7030_0692_41DB_B7810B27B8AC",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_614FCB21_7030_3AAF_41D1_43AC52AA330E_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "id": "AnimatedImageResource_4CEB9177_7030_0692_41D9_9ACBE4077A5D",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_614FCB21_7030_3AAF_41D1_43AC52AA330E_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_4CEBD177_7030_0692_41C2_FDE34166D68E",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_614FCB21_7030_3AAF_41D1_43AC52AA330E_1_HS_3_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_5284BC9A_70F0_1F9D_41D5_313B30F3427C",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_6113C3EE_7030_09B2_41D5_FB75B3986836_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_4449D151_7070_06EE_41D4_89B170B1B91E",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_6113C3EE_7030_09B2_41D5_FB75B3986836_0_HS_1_0.png",
   "width": 580,
   "class": "ImageResourceLevel",
   "height": 870
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_5C98D0AD_70D0_07B6_41C1_1C90B01FDA02",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_614CBDF2_7030_7992_41C2_BB897AB5B1C7_0_HS_0_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "id": "AnimatedImageResource_5C9830AD_70D0_07B6_41C4_7E0C5F3D0009",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_614CBDF2_7030_7992_41C2_BB897AB5B1C7_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "id": "AnimatedImageResource_4937F6CB_71D0_0BF3_41B8_D9D2029B6156",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_61D1159C_7030_0995_4184_9A9B9431557C_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "id": "AnimatedImageResource_493026CB_71D0_0BF3_41CA_53FC77F1EF08",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_61D1159C_7030_0995_4184_9A9B9431557C_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "id": "AnimatedImageResource_4930B6CB_71D0_0BF3_41BA_021BF8641262",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_61D1159C_7030_0995_4184_9A9B9431557C_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_52843C9A_70F0_1F9D_41C0_9D49D79878C9",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_61EDD171_7030_06AF_41D3_42DC820009C2_1_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_52BB0C9A_70F0_1F9D_41D1_349F9A43D0FD",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_66A04E04_70D0_1A76_41AA_92879A22AB62_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "id": "AnimatedImageResource_52BBFC9A_70F0_1F9D_41C5_C86D65B648D4",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_66A04E04_70D0_1A76_41AA_92879A22AB62_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "id": "AnimatedImageResource_52B85C9A_70F0_1F9D_41D3_85F3CDDF33FF",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_66A04E04_70D0_1A76_41AA_92879A22AB62_1_HS_2_0.png",
   "width": 420,
   "class": "ImageResourceLevel",
   "height": 330
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "id": "AnimatedImageResource_5C9A60AD_70D0_07B6_41DB_DFBA7CDCA21F",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_61E6D356_7030_0A95_41B1_5F8087399D42_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "id": "AnimatedImageResource_5C9A50AD_70D0_07B6_41D1_81A61C9ECBBC",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_61E6D356_7030_0A95_41B1_5F8087399D42_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "id": "AnimatedImageResource_5C8570AD_70D0_07B6_41A1_9445DDCBAC95",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_622C1750_7030_0AED_41D9_3C3EECC85056_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_5C9B70AD_70D0_07B6_41D2_ED40F555861A",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_612604C0_7030_0FEE_41D9_370EBC10496C_0_HS_0_0.png",
   "width": 720,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_5C98B0AD_70D0_07B6_41A2_ECDDFACFA25E",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_612604C0_7030_0FEE_41D9_370EBC10496C_0_HS_1_0.png",
   "width": 720,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_52B91C9A_70F0_1F9D_41D4_63B74D1C3D5A",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_6710066B_70D0_0AB2_41DB_186ACDD84803_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "id": "AnimatedImageResource_5C9310B3_70D0_0793_41D4_130E8212DA2F",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_614C1ABF_7030_1B92_41A9_03DA8BEB1A71_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "id": "AnimatedImageResource_5C90E0B3_70D0_0793_41D0_112489690B14",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_614C1ABF_7030_1B92_41A9_03DA8BEB1A71_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_5C9380B3_70D0_0793_41D0_4B1EC018F93A",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_614C1ABF_7030_1B92_41A9_03DA8BEB1A71_0_HS_2_0.png",
   "width": 720,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_5E194504_7070_0E75_41D6_3E0F10098D42",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_614C1ABF_7030_1B92_41A9_03DA8BEB1A71_0_HS_3_0.png",
   "width": 660,
   "class": "ImageResourceLevel",
   "height": 990
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "id": "AnimatedImageResource_5C9CC0B3_70D0_0793_41D3_2805A2ED3DB0",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_614CF795_7030_0997_41B3_3DD2AB366E34_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "id": "AnimatedImageResource_5C9C60B3_70D0_0793_41DA_B80690BB6030",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_614CF795_7030_0997_41B3_3DD2AB366E34_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "id": "AnimatedImageResource_5C9D80B3_70D0_0793_41C4_10C75E807117",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_614CF795_7030_0997_41B3_3DD2AB366E34_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_5C99A0B2_70D0_0792_41D1_25CA1A4F4353",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_61F6A83C_7030_0695_41D8_64A6B2C7ED3A_0_HS_0_0.png",
   "width": 720,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_5C99C0B2_70D0_0792_41B0_6F5E06DA5F41",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_61F6A83C_7030_0695_41D8_64A6B2C7ED3A_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_52BA2C9A_70F0_1F9D_41C1_3550D3EDBF23",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_6406AE10_70D0_3A6D_4196_BC641A174A02_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_52BA9C9A_70F0_1F9D_4182_E871B8100EF3",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_6406AE10_70D0_3A6D_4196_BC641A174A02_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_5C92F0B3_70D0_0793_41D0_9EBCE7EADE26",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_614CBB82_7030_FA72_41DB_3593A530EE19_0_HS_0_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "id": "AnimatedImageResource_5C9270B3_70D0_0793_41C1_BE396877E38B",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_614CBB82_7030_FA72_41DB_3593A530EE19_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_52B8CC9A_70F0_1F9D_41D3_EC6274DBF477",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_671B230E_70D0_0A75_41BA_A6A37C518D6D_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_52B8BC9A_70F0_1F9D_41B6_4364B91FBAEE",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_671B230E_70D0_0A75_41BA_A6A37C518D6D_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_5E060504_7070_0E75_41AE_91D32C76F18C",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_671B230E_70D0_0A75_41BA_A6A37C518D6D_0_HS_2_0.png",
   "width": 680,
   "class": "ImageResourceLevel",
   "height": 1020
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_5C9BC0AD_70D0_07B6_41CF_1A6561BFF158",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_614C5F4E_7030_1AF2_41C0_9F81F6E6026B_0_HS_0_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 540
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "id": "AnimatedImageResource_5C9940B2_70D0_0792_41CD_1C571FA98D69",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_614CF27D_7030_0A96_41C6_06C52E134CF9_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "id": "AnimatedImageResource_5C9E80B3_70D0_0793_41BE_3C267D76B89B",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_614CF27D_7030_0A96_41C6_06C52E134CF9_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "id": "AnimatedImageResource_5C9E20B3_70D0_0793_41DB_0D424B2B03DD",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_614CF27D_7030_0A96_41C6_06C52E134CF9_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "id": "AnimatedImageResource_4CE98177_7030_0692_41C7_F17A77137EFF",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_614C7114_7030_0695_41D4_F33CF326C756_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "id": "AnimatedImageResource_5285FC9A_70F0_1F9D_41D5_497BED1B6B9A",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_614C106B_7030_06B3_41D0_8DB05C9F0A0D_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "id": "AnimatedImageResource_52BA5C9A_70F0_1F9D_41AC_FAAE7876FB9C",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_614C106B_7030_06B3_41D0_8DB05C9F0A0D_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "id": "AnimatedImageResource_5C9E40B3_70D0_0793_41C7_39E15FC7F11C",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_61D13DF1_7030_39AE_41D3_EAD082CFA389_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "id": "AnimatedImageResource_5C9FE0B3_70D0_0793_41D9_7E374731DBDC",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_61D13DF1_7030_39AE_41D3_EAD082CFA389_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "id": "AnimatedImageResource_5C9F00B3_70D0_0793_41BD_C73040D655D8",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_61D13DF1_7030_39AE_41D3_EAD082CFA389_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 21,
 "id": "AnimatedImageResource_5C9CA0B3_70D0_0793_41C4_28CAB9BC9803",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_61D13DF1_7030_39AE_41D3_EAD082CFA389_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_4CEA0177_7030_0692_41D5_AB9E38507226",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_61E53F0E_7030_1A72_41D2_A1A6F5E13379_1_HS_0_0.png",
   "width": 720,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "colCount": 4,
 "frameCount": 24,
 "id": "AnimatedImageResource_4CEA7177_7030_0692_41D0_E8DFEB561E33",
 "class": "AnimatedImageResource",
 "levels": [
  {
   "url": "media/panorama_61E53F0E_7030_1A72_41D2_A1A6F5E13379_1_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ],
 "rowCount": 6,
 "frameDuration": 41
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Arial",
 "id": "Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89",
 "paddingLeft": 0,
 "width": 60,
 "iconBeforeLabel": true,
 "class": "Button",
 "backgroundOpacity": 1,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "iconHeight": 17,
 "minHeight": 1,
 "iconWidth": 17,
 "propagateClick": false,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0
 ],
 "iconURL": "skin/Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89.png",
 "rollOverBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#CE6700"
 ],
 "backgroundColor": [
  "#F7931E"
 ],
 "borderSize": 0,
 "paddingRight": 0,
 "mode": "toggle",
 "minWidth": 1,
 "fontSize": 12,
 "horizontalAlign": "center",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "pressedIconURL": "skin/Button_4CC5476E_5ABB_CC4E_41D1_A04ABE17DA89_pressed.png",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "click": "if(!this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4.get('visible')){ this.setComponentVisibility(this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_0A760F11_3BA1_BFAE_41CD_32268FCAF8B4, false, 0, null, null, false) }",
 "height": 60,
 "fontColor": "#FFFFFF",
 "data": {
  "name": "Button Settings"
 },
 "fontStyle": "normal",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "normal",
 "shadowSpread": 1
},
{
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "height": "100%",
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "paddingLeft": 0,
 "width": "85%",
 "class": "Container",
 "backgroundOpacity": 1,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000"
 ],
 "contentOpaque": false,
 "data": {
  "name": "-left"
 },
 "paddingTop": 0,
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "height": "100%",
 "id": "Container_26D3A42C_3F86_BA30_419B_2C6BE84D2718",
 "paddingLeft": 0,
 "width": 8,
 "class": "Container",
 "backgroundOpacity": 1,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#F7931E"
 ],
 "contentOpaque": false,
 "data": {
  "name": "orange line"
 },
 "paddingTop": 0,
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "height": "100%",
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "paddingLeft": 50,
 "width": "50%",
 "class": "Container",
 "backgroundOpacity": 1,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 20,
 "overflow": "visible",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 460,
 "borderSize": 0,
 "paddingRight": 50,
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "data": {
  "name": "-right"
 },
 "paddingTop": 20,
 "layout": "vertical",
 "scrollBarOpacity": 0.51
},
{
 "maxHeight": 60,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "paddingLeft": 0,
 "width": "25%",
 "class": "IconButton",
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "minHeight": 50,
 "propagateClick": false,
 "verticalAlign": "middle",
 "transparencyActive": false,
 "borderSize": 0,
 "paddingRight": 0,
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false)",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "height": "75%",
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60
},
{
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "scrollBarOpacity": 0.5,
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "paddingLeft": 0,
 "width": "100%",
 "class": "Container",
 "backgroundOpacity": 0.3,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "data": {
  "name": "header"
 },
 "paddingTop": 0,
 "layout": "absolute",
 "height": 140
},
{
 "itemVerticalAlign": "top",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "left": 0,
 "width": "100%",
 "scrollBarWidth": 10,
 "itemLabelFontColor": "#666666",
 "selectedItemLabelFontWeight": "bold",
 "borderRadius": 5,
 "itemLabelGap": 7,
 "paddingBottom": 70,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "itemBackgroundColorDirection": "vertical",
 "minHeight": 1,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "verticalAlign": "middle",
 "selectedItemLabelFontColor": "#F7931E",
 "itemPaddingBottom": 3,
 "scrollBarColor": "#F7931E",
 "paddingRight": 70,
 "itemLabelFontStyle": "normal",
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "itemLabelHorizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "itemOpacity": 1,
 "itemMode": "normal",
 "gap": 26,
 "itemMaxWidth": 1000,
 "itemLabelFontFamily": "Montserrat",
 "rollOverItemThumbnailShadowColor": "#F7931E",
 "height": "92%",
 "itemMaxHeight": 1000,
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemThumbnailHeight": 125,
 "itemBorderRadius": 0,
 "paddingTop": 10,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemHorizontalAlign": "center",
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "itemPaddingLeft": 3,
 "itemLabelPosition": "bottom",
 "itemThumbnailWidth": 220,
 "selectedItemThumbnailShadow": true,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "paddingLeft": 70,
 "itemThumbnailShadow": false,
 "rollOverItemLabelFontColor": "#F7931E",
 "itemBackgroundOpacity": 0,
 "class": "ThumbnailGrid",
 "backgroundOpacity": 0,
 "shadow": false,
 "itemThumbnailBorderRadius": 0,
 "itemPaddingTop": 3,
 "itemBackgroundColor": [],
 "selectedItemThumbnailShadowVerticalLength": 0,
 "propagateClick": false,
 "itemWidth": 220,
 "itemBackgroundColorRatios": [],
 "bottom": -0.2,
 "itemThumbnailOpacity": 1,
 "itemMinHeight": 50,
 "itemPaddingRight": 3,
 "horizontalAlign": "center",
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "scrollBarMargin": 2,
 "rollOverItemThumbnailShadow": true,
 "itemHeight": 160,
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 13,
 "data": {
  "name": "ThumbnailList"
 },
 "itemMinWidth": 50
},
{
 "insetBorder": false,
 "id": "WebFrame_22F9EEFF_0C1A_2293_4165_411D4444EFEA",
 "paddingLeft": 0,
 "width": "100%",
 "class": "WebFrame",
 "backgroundOpacity": 1,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14377.55330038866!2d-73.99492968084243!3d40.75084469078082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9f775f259%3A0x999668d0d7c3fd7d!2s400+5th+Ave%2C+New+York%2C+NY+10018!5e0!3m2!1ses!2sus!4v1467271743182\" width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>",
 "minHeight": 1,
 "propagateClick": false,
 "backgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "backgroundColorDirection": "vertical",
 "scrollEnabled": true,
 "backgroundColor": [
  "#FFFFFF"
 ],
 "data": {
  "name": "WebFrame48191"
 },
 "paddingTop": 0,
 "height": "100%"
},
{
 "maxHeight": 60,
 "id": "IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF",
 "paddingLeft": 0,
 "width": "25%",
 "class": "IconButton",
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF.jpg",
 "rollOverIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_rollover.jpg",
 "minHeight": 50,
 "propagateClick": false,
 "verticalAlign": "middle",
 "transparencyActive": false,
 "borderSize": 0,
 "paddingRight": 0,
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_221B1648_0C06_E5FD_417F_E6FCCCB4A6D7, false, 0, null, null, false)",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_221B2648_0C06_E5FD_41A6_F9E27CDB95AF_pressed.jpg",
 "height": "75%",
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60
},
{
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "MapViewer",
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 6,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "transitionDuration": 500,
 "minHeight": 1,
 "toolTipBorderRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "minWidth": 1,
 "borderSize": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingRight": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipFontSize": 12,
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "shadow": false,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarProgressBorderColor": "#000000",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Floor Plan"
 }
},
{
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "paddingLeft": 0,
 "width": "100%",
 "class": "Container",
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "height": 140,
 "contentOpaque": false,
 "data": {
  "name": "header"
 },
 "paddingTop": 0,
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "height": "100%",
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "paddingLeft": 0,
 "width": "100%",
 "class": "Container",
 "backgroundOpacity": 0.3,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "visible",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "data": {
  "name": "Container photo"
 },
 "paddingTop": 0,
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "height": "100%",
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "paddingLeft": 0,
 "width": "55%",
 "class": "Container",
 "backgroundOpacity": 1,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#000000"
 ],
 "contentOpaque": false,
 "data": {
  "name": "-left"
 },
 "paddingTop": 0,
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "height": "100%",
 "id": "Container_27875147_3F82_7A70_41CC_C0FFBB32BEFD",
 "paddingLeft": 0,
 "width": 8,
 "class": "Container",
 "backgroundOpacity": 1,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#F7931E"
 ],
 "contentOpaque": false,
 "data": {
  "name": "orange line"
 },
 "paddingTop": 0,
 "layout": "absolute",
 "scrollBarOpacity": 0.5
},
{
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "height": "100%",
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "paddingLeft": 60,
 "width": "45%",
 "class": "Container",
 "backgroundOpacity": 1,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 20,
 "overflow": "visible",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 460,
 "borderSize": 0,
 "paddingRight": 60,
 "scrollBarColor": "#0069A3",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "data": {
  "name": "-right"
 },
 "paddingTop": 20,
 "layout": "vertical",
 "scrollBarOpacity": 0.51
},
{
 "maxHeight": 60,
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "paddingLeft": 0,
 "width": "25%",
 "class": "IconButton",
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "minHeight": 50,
 "propagateClick": false,
 "verticalAlign": "middle",
 "transparencyActive": false,
 "borderSize": 0,
 "paddingRight": 0,
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false)",
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "height": "75%",
 "data": {
  "name": "X"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 1000,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "0%",
 "paddingLeft": 0,
 "width": "100%",
 "scaleMode": "fit_outside",
 "class": "Image",
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "top": "0%",
 "borderSize": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "horizontalAlign": "center",
 "height": "100%",
 "data": {
  "name": "photo"
 },
 "paddingTop": 0,
 "maxWidth": 2000
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "paddingLeft": 0,
 "width": "100%",
 "class": "Container",
 "backgroundOpacity": 0.3,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "right",
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 20,
 "layout": "horizontal",
 "height": 60
},
{
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "height": "100%",
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "paddingLeft": 0,
 "width": "100%",
 "class": "Container",
 "backgroundOpacity": 0.3,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 30,
 "overflow": "scroll",
 "minHeight": 520,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 100,
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "data": {
  "name": "Container text"
 },
 "paddingTop": 0,
 "layout": "vertical",
 "scrollBarOpacity": 0.79
},
{
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "paddingLeft": 0,
 "width": 370,
 "class": "Container",
 "backgroundOpacity": 0.3,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "height": 40,
 "contentOpaque": false,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 0,
 "layout": "horizontal",
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "paddingLeft": 0,
 "width": "100%",
 "class": "IconButton",
 "shadow": false,
 "borderRadius": 0,
 "right": 20,
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "minHeight": 50,
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "top",
 "top": 20,
 "borderSize": 0,
 "transparencyActive": false,
 "paddingRight": 0,
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "horizontalAlign": "right",
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "height": "36.14%",
 "data": {
  "name": "IconButton X"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 60,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "paddingLeft": 0,
 "width": "100%",
 "class": "IconButton",
 "shadow": false,
 "borderRadius": 0,
 "right": 20,
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "minHeight": 50,
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "top",
 "top": 20,
 "borderSize": 0,
 "transparencyActive": false,
 "paddingRight": 0,
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "horizontalAlign": "right",
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "height": "36.14%",
 "data": {
  "name": "IconButton X"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60
},
{
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "paddingBottom": 0,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "toolTipPaddingLeft": 6,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "transitionDuration": 500,
 "minHeight": 1,
 "toolTipBorderRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorDirection": "vertical",
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 0,
 "minWidth": 1,
 "borderSize": 0,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "paddingRight": 0,
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipFontSize": 12,
 "height": "100%",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipPaddingBottom": 4,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "progressBarBorderRadius": 0,
 "paddingTop": 0,
 "playbackBarBorderRadius": 0,
 "paddingLeft": 0,
 "playbackBarHeadBorderRadius": 0,
 "class": "ViewerArea",
 "shadow": false,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarBorderSize": 0,
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarProgressBorderColor": "#000000",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "top": "0%",
 "playbackBarHeadShadowColor": "#000000",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "transitionMode": "blending",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "data": {
  "name": "Viewer photoalbum 1"
 }
},
{
 "maxHeight": 60,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "paddingLeft": 0,
 "width": "14.22%",
 "class": "IconButton",
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "minHeight": 50,
 "propagateClick": false,
 "verticalAlign": "middle",
 "top": "20%",
 "bottom": "20%",
 "borderSize": 0,
 "transparencyActive": false,
 "paddingRight": 0,
 "mode": "push",
 "minWidth": 50,
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "data": {
  "name": "IconButton <"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 60,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "paddingLeft": 0,
 "width": "14.22%",
 "class": "IconButton",
 "shadow": false,
 "borderRadius": 0,
 "right": 10,
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "minHeight": 50,
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "top": "20%",
 "bottom": "20%",
 "borderSize": 0,
 "transparencyActive": false,
 "paddingRight": 0,
 "mode": "push",
 "minWidth": 50,
 "horizontalAlign": "center",
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "data": {
  "name": "IconButton >"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "paddingLeft": 0,
 "width": "10%",
 "class": "IconButton",
 "shadow": false,
 "borderRadius": 0,
 "right": 20,
 "backgroundOpacity": 0,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "minHeight": 50,
 "paddingBottom": 0,
 "propagateClick": false,
 "verticalAlign": "top",
 "top": 20,
 "borderSize": 0,
 "transparencyActive": false,
 "paddingRight": 0,
 "mode": "push",
 "minWidth": 50,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "horizontalAlign": "right",
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "height": "10%",
 "data": {
  "name": "IconButton X"
 },
 "paddingTop": 0,
 "cursor": "hand",
 "maxWidth": 60
},
{
 "maxHeight": 1000,
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "paddingLeft": 0,
 "width": "100%",
 "scaleMode": "fit_outside",
 "class": "Image",
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "bottom",
 "top": "0%",
 "borderSize": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "horizontalAlign": "center",
 "height": "100%",
 "data": {
  "name": "Image"
 },
 "paddingTop": 0,
 "maxWidth": 2000
},
{
 "scrollBarOpacity": 0.5,
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "paddingLeft": 0,
 "width": "100%",
 "class": "Container",
 "backgroundOpacity": 0.3,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "right",
 "backgroundColorDirection": "vertical",
 "gap": 0,
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 20,
 "layout": "horizontal",
 "height": 60
},
{
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "height": "100%",
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "paddingLeft": 0,
 "width": "100%",
 "class": "Container",
 "backgroundOpacity": 0.3,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 30,
 "overflow": "scroll",
 "minHeight": 520,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 100,
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarColor": "#E73B2C",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "data": {
  "name": "Container text"
 },
 "paddingTop": 0,
 "layout": "vertical",
 "scrollBarOpacity": 0.79
},
{
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "paddingLeft": 0,
 "width": 370,
 "class": "Container",
 "backgroundOpacity": 0.3,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "borderSize": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "height": 40,
 "contentOpaque": false,
 "data": {
  "name": "Container space"
 },
 "paddingTop": 0,
 "layout": "horizontal",
 "scrollBarOpacity": 0.5
},
{
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "paddingLeft": 10,
 "width": "100%",
 "class": "HTMLText",
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 20,
 "backgroundOpacity": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "scrollBarColor": "#F7931E",
 "paddingRight": 10,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:7.58vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.65vh;font-family:'Montserrat';\"><B>LOREM IPSUM</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.65vh;font-family:'Montserrat';\"><B>DOLOR SIT AMET</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.89vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:1.89vh;font-family:'Montserrat';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.08vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.08vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.08vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.89vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.89vh;font-family:'Montserrat';\"><B>DONEC FEUGIAT:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.62vh;\"> </SPAN>\u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.89vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.89vh;font-family:'Montserrat';\"><B>LOREM IPSUM:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:2.71vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText"
 },
 "paddingTop": 0,
 "height": "100%"
},
{
 "textDecoration": "none",
 "layout": "horizontal",
 "fontFamily": "Montserrat",
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "paddingLeft": 0,
 "width": 180,
 "iconBeforeLabel": true,
 "class": "Button",
 "pressedBackgroundColorRatios": [
  0
 ],
 "backgroundOpacity": 0.8,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "iconHeight": 32,
 "minHeight": 1,
 "iconWidth": 32,
 "propagateClick": false,
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "backgroundColorRatios": [
  0
 ],
 "pressedBackgroundOpacity": 1,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "rollOverBackgroundOpacity": 1,
 "shadowColor": "#000000",
 "backgroundColor": [
  "#F7931E"
 ],
 "borderSize": 0,
 "paddingRight": 0,
 "mode": "push",
 "minWidth": 1,
 "fontSize": "1.96vh",
 "label": "LOREM IPSUM",
 "horizontalAlign": "center",
 "backgroundColorDirection": "vertical",
 "gap": 5,
 "height": 50,
 "fontColor": "#FFFFFF",
 "data": {
  "name": "Button Lorem Ipsum"
 },
 "fontStyle": "normal",
 "paddingTop": 0,
 "cursor": "hand",
 "shadowBlurRadius": 6,
 "fontWeight": "bold",
 "shadowSpread": 1
},
{
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "paddingLeft": 0,
 "width": "100%",
 "class": "HTMLText",
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "scrollBarColor": "#04A3E1",
 "paddingRight": 0,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:7.58vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.65vh;font-family:'Montserrat';\"><B>LOREM IPSUM</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:3.65vh;font-family:'Montserrat';\"><B>DOLOR SIT AMET</B></SPAN></SPAN></DIV></div>",
 "data": {
  "name": "HTMLText18899"
 },
 "paddingTop": 0,
 "height": "45%"
},
{
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "height": "80%",
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "paddingLeft": 0,
 "width": "100%",
 "class": "Container",
 "backgroundOpacity": 0.3,
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "overflow": "scroll",
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "top",
 "backgroundColorRatios": [
  0,
  1
 ],
 "minWidth": 1,
 "borderSize": 0,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "horizontalAlign": "left",
 "backgroundColorDirection": "vertical",
 "gap": 10,
 "scrollBarMargin": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "data": {
  "name": "- content"
 },
 "paddingTop": 0,
 "layout": "horizontal",
 "scrollBarOpacity": 0.5
},
{
 "maxHeight": 200,
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "paddingLeft": 0,
 "width": "25%",
 "scaleMode": "fit_inside",
 "class": "Image",
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 0,
 "backgroundOpacity": 0,
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "top",
 "borderSize": 0,
 "paddingRight": 0,
 "minWidth": 1,
 "horizontalAlign": "left",
 "height": "100%",
 "data": {
  "name": "agent photo"
 },
 "paddingTop": 0,
 "maxWidth": 200
},
{
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "paddingLeft": 10,
 "width": "75%",
 "class": "HTMLText",
 "shadow": false,
 "borderRadius": 0,
 "paddingBottom": 10,
 "backgroundOpacity": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "scrollBarColor": "#F7931E",
 "paddingRight": 10,
 "minWidth": 1,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#f7931e;font-size:2.03vh;font-family:'Montserrat';\"><B>JOHN DOE</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.62vh;font-family:'Montserrat';\">LICENSED REAL ESTATE SALESPERSON</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.08vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Montserrat';\">Tlf.: +11 111 111 111</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Montserrat';\">jhondoe@realestate.com</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-family:'Montserrat';\">www.loremipsum.com</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.08vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.08vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.08vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "data": {
  "name": "HTMLText19460"
 },
 "paddingTop": 0,
 "height": "100%"
}],
 "minWidth": 20,
 "borderSize": 0,
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "vrPolyfillScale": 1,
 "horizontalAlign": "left",
 "gap": 10,
 "scrollBarMargin": 2,
 "mouseWheelEnabled": true,
 "buttonToggleFullscreen": "this.Button_4CF1FD24_5A86_3DF2_41B3_7CDBA2E3D44A",
 "scripts": {
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "existsKey": function(key){  return key in window; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "unregisterKey": function(key){  delete window[key]; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "registerKey": function(key, value){  window[key] = value; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getKey": function(key){  return window[key]; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } }
 },
 "contentOpaque": false,
 "defaultVRPointer": "laser",
 "data": {
  "name": "Player468"
 },
 "paddingTop": 0,
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "downloadEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
