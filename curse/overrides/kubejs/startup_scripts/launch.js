// Listen to item registry event
onEvent('item.registry', event => {
  let second = 20
  // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
  // If you want a custom item model, you can create one in Blockbench and put it in kubejs/assets/kubejs/models/item/test_item.json
  event.create('lapis_sheet').tag("forge:plates").tag("forge:plates/lapis_alloy")
  
  // You can chain builder methods as much as you like
  event.create('integrated_circuit').maxStackSize(16)
  event.create('complex_integrated_circuit').maxStackSize(16)
  
  


  
  event.create('incomplete_kinetic_mechanism').maxStackSize(1)
  event.create('incomplete_kinetic_mechanism_x4').texture('kubejs:item/incomplete_kinetic_mechanism').maxStackSize(1)
  event.create('kinetic_mechanism')

  event.create('incomplete_hydraulic_mechanism').maxStackSize(1) 
  event.create('hydraulic_mechanism')
  
  event.create('incomplete_sturdy_mechanism').maxStackSize(1)
  event.create('sturdy_mechanism')
  
  event.create('incomplete_infernal_mechanism').maxStackSize(1)
  event.create('infernal_mechanism')
  
  event.create('incomplete_inductive_mechanism').maxStackSize(1)
  event.create('inductive_mechanism')
  
  event.create('incomplete_universal_mechanism').maxStackSize(1).rarity(RARITY_RARE)
  event.create('universal_mechanism').rarity(RARITY_RARE)
  
  event.create('incomplete_abstruse_mechanism').maxStackSize(1).rarity(RARITY_EPIC)
  event.create('abstruse_mechanism').rarity(RARITY_EPIC)

  event.create('incomplete_magmatic_mechanism').maxStackSize(1)
  
  event.create('matter_plastics').tag("forge:ingots").tag("forge:ingots/matter_plastics")
  event.create('matter_plastics_sheet').tag("forge:plates").tag("forge:plates/matter_plastics")

  event.create('ferrite_ingot').tag("forge:ingots").tag("forge:ingots/ferrite")
  event.create('ferrite_sheet').tag("forge:plates").tag("forge:plates/ferrite")
  event.create('ferrite_compound')

  event.create('absorbing_coil').maxStackSize(16).texture('kubejs:item/coil/absorbing')
  event.create('incomplete_absorbing_coil').maxStackSize(1).texture('kubejs:item/coil/incomplete')

  event.create('generating_coil').maxStackSize(16).texture('kubejs:item/coil/generating')
  event.create('incomplete_generating_coil').maxStackSize(1).texture('kubejs:item/coil/incomplete')

  event.create('transmitting_coil').maxStackSize(16).texture('kubejs:item/coil/transmitting')
  event.create('incomplete_transmitting_coil').maxStackSize(1).texture('kubejs:item/coil/incomplete')

  event.create('inductive_coil').maxStackSize(16).texture('kubejs:item/coil/inductive')
  event.create('incomplete_inductive_coil').maxStackSize(1).texture('kubejs:item/coil/incomplete_inductive')

  event.create('tanned_leather')
  event.create('booting_medium').maxDamage(8).maxStackSize(1)
  event.create('incomplete_cake').maxStackSize(1)
  event.create('incomplete_pie').maxStackSize(1)
  event.create('booting_assembly').maxStackSize(1)
  event.create('drill_head')
  event.create('saw_blade')
  event.create('industrial_amethyst').tag("forge:gems")

  event.create('incomplete_lapis_alloy').maxStackSize(1)
  event.create('lapis_alloy').tag("forge:ingots").tag("forge:ingots/lapis_alloy")

  event.create('incomplete_amethyst_alloy').maxStackSize(1)
  event.create('amethyst_alloy').tag("forge:ingots").tag("forge:ingots/amethyst_alloy")

  event.create('redstone_alloy').tag("forge:ingots").tag("forge:ingots/redstone")
  event.create('capacitance_complex').tag("forge:ingots").tag("forge:ingots/capacitance_complex")
  event.create('ender_alloy').tag("forge:ingots").tag("forge:ingots/enderium")

  event.create('resonance_tube')
  event.create('reserver_tube')
  event.create('preserver_tube')
  event.create('pulse_tube')

  event.create('amethyst_seed')
  event.create('growing_amethyst_seed').maxStackSize(1)

  event.create('mythril_seed')
  event.create('growing_mythril_seed').maxStackSize(1)

  event.create('quartz_seed')
  event.create('growing_quartz_cluster').maxStackSize(1)

  event.create('magnetite')
  event.create('copper_solenoid').tag('kubejs:solenoid')
  event.create('gold_solenoid').tag('kubejs:solenoid')
  
  event.create('electrum_ingot').texture('kubejs:item/electrum/ingot').tag('forge:ingots').tag('forge:ingots/electrum')
  event.create('electrum_nugget').texture('kubejs:item/electrum/nugget').tag('forge:nuggets').tag('forge:nuggets/electrum')
  event.create('electrum_dust').texture('kubejs:item/electrum/dust').tag('forge:dusts').tag('forge:dusts/electrum')
  event.create('electrum_plate').tag('forge:plates').tag('forge:plates/electrum')

  event.create('invar_ingot').texture('kubejs:item/invar/ingot').tag('forge:ingots').tag('forge:ingots/invar')
  event.create('invar_nugget').texture('kubejs:item/invar/nugget').tag('forge:nuggets').tag('forge:nuggets/invar')
  event.create('invar_dust').texture('kubejs:item/invar/dust').tag('forge:dusts').tag('forge:dusts/invar')
  event.create('invar_plate').tag('forge:plates').tag('forge:plates/invar')

  event.create('constantan_ingot').texture('kubejs:item/constantan/ingot').tag('forge:ingots').tag('forge:ingots/constantan')
  event.create('constantan_nugget').texture('kubejs:item/constantan/nugget').tag('forge:nuggets').tag('forge:nuggets/constantan')
  event.create('constantan_dust').texture('kubejs:item/constantan/dust').tag('forge:dusts').tag('forge:dusts/constantan')
  event.create('constantan_plate').tag('forge:plates').tag('forge:plates/constantan')

  event.create('lead_ingot').texture('kubejs:item/lead/ingot').tag('forge:ingots').tag('forge:ingots/lead')
  event.create('lead_nugget').texture('kubejs:item/lead/nugget').tag('forge:nuggets').tag('forge:nuggets/lead')
  event.create('lead_dust').texture('kubejs:item/lead/dust').tag('forge:dusts').tag('forge:dusts/lead')
  event.create('lead_plate').tag('forge:plates').tag('forge:plates/lead')

  event.create('nickel_ingot').texture('kubejs:item/nickel/ingot').tag('forge:ingots').tag('forge:ingots/nickel')
  event.create('nickel_nugget').texture('kubejs:item/nickel/nugget').tag('forge:nuggets').tag('forge:nuggets/nickel')
  event.create('nickel_dust').texture('kubejs:item/nickel/dust').tag('forge:dusts').tag('forge:dusts/nickel')
  event.create('nickel_plate').tag('forge:plates').tag('forge:plates/nickel')

  event.create('silver_ingot').texture('kubejs:item/silver/ingot').tag('forge:ingots').tag('forge:ingots/silver')
  event.create('silver_nugget').texture('kubejs:item/silver/nugget').tag('forge:nuggets').tag('forge:nuggets/silver')
  event.create('silver_dust').texture('kubejs:item/silver/dust').tag('forge:dusts').tag('forge:dusts/silver')
  event.create('silver_plate').tag('forge:plates').tag('forge:plates/silver')

  event.create('tin_ingot').texture('kubejs:item/tin/ingot').tag('forge:ingots').tag('forge:ingots/tin')
  event.create('tin_nugget').texture('kubejs:item/tin/nugget').tag('forge:nuggets').tag('forge:nuggets/tin')
  event.create('tin_dust').texture('kubejs:item/tin/dust').tag('forge:dusts').tag('forge:dusts/tin')
  event.create('tin_plate').tag('forge:plates').tag('forge:plates/tin')

  event.create('uranium_235')
  event.create('uranium_238')
  event.create('enriched_uranium_nuclear_fuel')
  event.create('incomplete_redstone_circuit_plate').maxStackSize(1)
  
  event.create('circuit_scrap').maxStackSize(16)
  event.create('chromatic_resonator').maxDamage(8).maxStackSize(1)  

  event.create('absorption_catalyst').maxStackSize(16)
  event.create('coke').burnTime(2400)

  event.create('alutinum').tag('forge:ingots').tag('forge:ingots/alutinum')
  event.create('alutinum_sheet').tag('forge:plates').tag('forge:plates/alutinum')
  event.create('andesite_sheet').tag('forge:plates').tag('forge:plates/andesite_alloy')

  event.create('industrium_nugget').tag('forge:nuggets').tag('forge:nuggets/industrium')

  event.create('slag').tag('forge:slag').tag('forge:gems').tag('forge:gems/slag')
  event.create('rich_slag').tag('forge:rich_slag').tag('forge:gems').tag('forge:gems/rich_slag')

  event.create('slag_brick').tag('forge:ingots').tag('forge:ingots/slag')
  event.create('rich_slag_brick').tag('forge:ingots').tag('forge:ingots/rich_slag')

  event.create('echo_shard').tag('forge:gems')

  event.create('crystallized_honey').food(food => {
		food
    		.hunger(10)
    		.saturation(0.2)
      		.removeEffect('poison')
      		.removeEffect('wither')
      		.alwaysEdible()
      		.fastToEat()
	})

  event.create('propolis').tag('forge:slimeballs').food(food => {
		food
    		.hunger(1)
    		.saturation(1)
      		.effect('regeneration', 30*second, 0, 1)
      		.effect('nausea', 10*second, 0, 1)
      		.removeEffect('poison')
      		.removeEffect('mining_fatigue')
      		.alwaysEdible()
	})
  event.create('wax')
  event.create('wax_mote')
  event.create('cotton_ball').tag('minecraft:wool')
  event.create('enriched_peat').burnTime(2400).tag('create:blaze_burner_fuel/special').tag('forge:ingots').tooltip("🔥")
  event.create('honeydew').food(food => {
		food
    		.hunger(1)
    		.saturation(0.3)
      		.effect('speed', 5*second, 0, 1)
      		.removeEffect('weakness')
      		.removeEffect('mining_fatigue')
      		.alwaysEdible()
      		.fastToEat()
	})

  event.create('empty_sac')
  event.create('redstone_sac')
  event.create('silica_gel').tag('forge:slimeballs')
  event.create('aerogel')
})
onEvent('fluid.registry', event => {
  event.create('tannin')
    .thinTexture(0x593428)
    .bucketColor(0xA65A3F)
    .noBlock()
  event.create('volatile_sky_liquid')
    .thinTexture(0x090422)
    .bucketColor(0x090422)
    .noBlock()
  event.create('destabilized_redstone')
    .stillTexture('kubejs:block/redstone_still')
    .flowingTexture('kubejs:block/redstone_flow')
    .bucketColor(0xC41D33)
    .noBlock()
  event.create('liquified_uranium_nuclear_fuel')
    .stillTexture('kubejs:block/liquified_uranium_nuclear_fuel_still')
    .flowingTexture('kubejs:block/liquified_uranium_nuclear_fuel_flow')
    .bucketColor(0x3AAF50)
    .noBlock()
  event.create('overheated_water')
    .thinTexture(0x9AB2D6)
    .bucketColor(0xB3C4E0)
    .noBlock()
  event.create('natural_gas')
    .thinTexture(0xEADEF8)
    .bucketColor(0xF7F1FD)
    .gaseous()
    .noBlock()
  event.create('creosote_oil')
    .thinTexture(0x370B16)
    .bucketColor(0x570E22)
    .noBlock()
  let pahoehoelava = event.create('pahoehoe_lava')
                       .thickTexture(0xAF978E)
                       .bucketColor(0xAF978E)
                       .noBlock()
  pahoehoelava.bucketItem.burnTime(19000)
  event.create('glow_ink')
    .stillTexture('kubejs:block/glow_ink_still')
    .flowingTexture('kubejs:block/glow_ink_flow')
    .noBlock()
    .bucketTexture('kubejs:item/glow_ink_bucket')
})
onEvent('block.registry', event => {
  event.create('invar_block','basic')
   	   .material('metal')
   	   .hardness(5)
           .resistance(6)
   	   .tagBlock('minecraft:mineable/pickaxe')
 	   .tagBlock('minecraft:needs_iron_tool')
  	   .tagBoth('forge:storage_blocks')
   	   .tagBoth('forge:storage_blocks/invar')
   	   .requiresTool(true)
           .box(0,0,0,1,1,1,false)
  event.create('electrum_block','basic')
   	   .material('metal')
   	   .hardness(5)
           .resistance(6)
   	   .tagBlock('minecraft:mineable/pickaxe')
   	   .tagBlock('minecraft:needs_iron_tool')
  	   .tagBoth('forge:storage_blocks')
   	   .tagBoth('forge:storage_blocks/electrum')
   	   .requiresTool(true)
           .box(0,0,0,1,1,1,false)
  event.create('lead_block','basic')
  	   .material('metal')
  	   .hardness(5)
           .resistance(6)
  	   .tagBlock('minecraft:mineable/pickaxe')
  	   .tagBlock('minecraft:needs_iron_tool')
  	   .tagBoth('forge:storage_blocks')
  	   .tagBoth('forge:storage_blocks/lead')
   	   .requiresTool(true)
           .box(0,0,0,1,1,1,false)
  event.create('nickel_block','basic')
  	   .material('metal')
  	   .hardness(5)
           .resistance(6)
  	   .tagBlock('minecraft:mineable/pickaxe')
  	   .tagBlock('minecraft:needs_iron_tool')
  	   .tagBoth('forge:storage_blocks')
  	   .tagBoth('forge:storage_blocks/nickel')
   	   .requiresTool(true)
           .box(0,0,0,1,1,1,false)
  event.create('silver_block','basic')
  	   .material('metal')
  	   .hardness(5)
           .resistance(6)
  	   .tagBlock('minecraft:mineable/pickaxe')
  	   .tagBlock('minecraft:needs_iron_tool')
  	   .tagBoth('forge:storage_blocks')
  	   .tagBoth('forge:storage_blocks/silver')
   	   .requiresTool(true)
           .box(0,0,0,1,1,1,false)
  event.create('constantan_block','basic')
  	   .material('metal')
  	   .hardness(5)
           .resistance(6)
  	   .tagBlock('minecraft:mineable/pickaxe')
  	   .tagBlock('minecraft:needs_stone_tool')
  	   .tagBoth('forge:storage_blocks')
  	   .tagBoth('forge:storage_blocks/constantan')
   	   .requiresTool(true)
           .box(0,0,0,1,1,1,false)
  event.create('tin_block','basic')
  	   .material('metal')
  	   .hardness(5)
           .resistance(6)
  	   .tagBlock('minecraft:mineable/pickaxe')
  	   .tagBlock('minecraft:needs_stone_tool')
  	   .tagBoth('forge:storage_blocks')
  	   .tagBoth('forge:storage_blocks/tin')
   	   .requiresTool(true)
           .box(0,0,0,1,1,1,false)

  event.create('andesite_machine', 'stairs')
           .material('lantern')
   	   .hardness(5)
           .resistance(6)
   	   .tagBlock('minecraft:mineable/axe')
   	   .tagBlock('minecraft:mineable/pickaxe')
 	   .tagBlock('minecraft:needs_stone_tool')
           .renderType('solid')
           .notSolid()
           .transparent(true)
   	   .requiresTool(true)

  event.create('brass_machine', 'stairs')
           .material('lantern')
   	   .hardness(5)
           .resistance(6)
   	   .tagBlock('minecraft:mineable/axe')
   	   .tagBlock('minecraft:mineable/pickaxe')
 	   .tagBlock('minecraft:needs_stone_tool')
           .renderType('translucent')
           .notSolid()
           .transparent(true)
   	   .requiresTool(true)

  event.create('copper_machine', 'stairs')
           .material('lantern')
   	   .hardness(5)
           .resistance(6)
   	   .tagBlock('minecraft:mineable/axe')
   	   .tagBlock('minecraft:mineable/pickaxe')
 	   .tagBlock('minecraft:needs_stone_tool')
           .renderType('cutout')
           .notSolid()
           .transparent(true)
   	   .requiresTool(true)

  event.create('coke_block','basic')
  	   .material('stone')
  	   .hardness(5)
           .resistance(6)
  	   .tagBlock('minecraft:mineable/pickaxe')
  	   .tagBlock('forge:needs_wood_tool')
  	   .tagBoth('forge:storage_blocks')
  	   .tagBoth('forge:storage_blocks/coal_coke')
   	   .requiresTool(true)
           .item((itemb) => {itemb.burnTime(24000)})
           .box(0,0,0,1,1,1,false)

  event.create('slag_block','basic')
  	   .material('stone')
  	   .hardness(5)
           .resistance(6)
  	   .tagBlock('minecraft:mineable/pickaxe')
  	   .tagBlock('forge:needs_wood_tool')
  	   .tagBoth('forge:storage_blocks')
  	   .tagBoth('forge:storage_blocks/slag')
   	   .requiresTool(true)
           .box(0,0,0,1,1,1,false)

  event.create('slag_pressure_plate', 'stone_pressure_plate')
           .textureAll('kubejs:block/slag_block')
  	   .material('stone')
  	   .hardness(1)
           .resistance(1)
  	   .tagBlock('minecraft:mineable/pickaxe')
  	   .tagBlock('forge:needs_wood_tool')
  	   .tagBoth('minecraft:pressure_plates')
           .tagBoth('minecraft:stone_pressure_plates')
   	   .requiresTool(true)
  event.create('slag_button', 'stone_button')
           .textureAll('kubejs:block/slag_block')
  	   .material('stone')
  	   .hardness(1)
           .resistance(1)
  	   .tagBlock('minecraft:mineable/pickaxe')
  	   .tagBlock('forge:needs_wood_tool')
  	   .tagBoth('minecraft:buttons')
  	   .tagBoth('minecraft:stone_buttons')
   	   .requiresTool(true)
  event.create('slag_slab', 'slab')
           .textureAll('kubejs:block/slag_block')
  	   .material('stone')
  	   .hardness(5)
           .resistance(6)
  	   .tagBlock('minecraft:mineable/pickaxe')
  	   .tagBlock('forge:needs_wood_tool')
  	   .tagBoth('minecraft:slabs')
   	   .requiresTool(true)
  event.create('slag_stairs', 'stairs')
           .textureAll('kubejs:block/slag_block')
  	   .material('stone')
  	   .hardness(5)
           .resistance(6)
  	   .tagBlock('minecraft:mineable/pickaxe')
  	   .tagBlock('forge:needs_wood_tool')
  	   .tagBoth('minecraft:stairs')
   	   .requiresTool(true)
  event.create('slag_wall', 'wall')
           .textureAll('kubejs:block/slag_block')
  	   .material('stone')
  	   .hardness(5)
           .resistance(6)
  	   .tagBlock('minecraft:mineable/pickaxe')
  	   .tagBlock('forge:needs_wood_tool')
  	   .tagBoth('minecraft:walls')
  	   .tagBlock('tconstruct:platform_connections')
   	   .requiresTool(true)
  event.create('slag_fence_gate', 'fence_gate')
           .textureAll('kubejs:block/slag_block')
  	   .material('stone')
  	   .hardness(5)
           .resistance(6)
  	   .tagBlock('minecraft:mineable/pickaxe')
  	   .tagBlock('forge:needs_wood_tool')
  	   .tagBoth('minecraft:fence_gates')
   	   .requiresTool(true)

  event.create('rich_slag_block','basic')
  	   .material('stone')
  	   .hardness(5)
           .resistance(6)
  	   .tagBlock('minecraft:mineable/pickaxe')
  	   .tagBlock('forge:needs_wood_tool')
  	   .tagBoth('forge:storage_blocks')
  	   .tagBoth('forge:storage_blocks/rich_slag')
   	   .requiresTool(true)
           .box(0,0,0,1,1,1,false)

  event.create('rich_slag_pressure_plate', 'stone_pressure_plate')
           .textureAll('kubejs:block/rich_slag_block')
  	   .material('stone')
  	   .hardness(1)
           .resistance(1)
  	   .tagBlock('minecraft:mineable/pickaxe')
  	   .tagBlock('forge:needs_wood_tool')
  	   .tagBoth('minecraft:pressure_plates')
           .tagBoth('minecraft:stone_pressure_plates')
   	   .requiresTool(true)
  event.create('rich_slag_button', 'stone_button')
           .textureAll('kubejs:block/rich_slag_block')
  	   .material('stone')
  	   .hardness(1)
           .resistance(1)
  	   .tagBlock('minecraft:mineable/pickaxe')
  	   .tagBlock('forge:needs_wood_tool')
  	   .tagBoth('minecraft:buttons')
  	   .tagBoth('minecraft:stone_buttons')
   	   .requiresTool(true)
  event.create('rich_slag_slab', 'slab')
           .textureAll('kubejs:block/rich_slag_block')
  	   .material('stone')
  	   .hardness(5)
           .resistance(6)
  	   .tagBlock('minecraft:mineable/pickaxe')
  	   .tagBlock('forge:needs_wood_tool')
  	   .tagBoth('minecraft:slabs')
   	   .requiresTool(true)
  event.create('rich_slag_stairs', 'stairs')
           .textureAll('kubejs:block/rich_slag_block')
  	   .material('stone')
  	   .hardness(5)
           .resistance(6)
  	   .tagBlock('minecraft:mineable/pickaxe')
  	   .tagBlock('forge:needs_wood_tool')
  	   .tagBoth('minecraft:stairs')
   	   .requiresTool(true)
  event.create('rich_slag_wall', 'wall')
           .textureAll('kubejs:block/rich_slag_block')
  	   .material('stone')
  	   .hardness(5)
           .resistance(6)
  	   .tagBlock('minecraft:mineable/pickaxe')
  	   .tagBlock('forge:needs_wood_tool')
  	   .tagBoth('minecraft:walls')
  	   .tagBlock('tconstruct:platform_connections')
   	   .requiresTool(true)
  event.create('rich_slag_fence_gate', 'fence_gate')
           .textureAll('kubejs:block/rich_slag_block')
  	   .material('stone')
  	   .hardness(5)
           .resistance(6)
  	   .tagBlock('minecraft:mineable/pickaxe')
  	   .tagBlock('forge:needs_wood_tool')
  	   .tagBoth('minecraft:fence_gates')
   	   .requiresTool(true)

  event.create('slag_bricks','basic')
  	   .material('stone')
  	   .hardness(5)
           .resistance(6)
  	   .tagBlock('minecraft:mineable/pickaxe')
  	   .tagBlock('forge:needs_wood_tool')
  	   .tagBoth('forge:bricks')
  	   .tagBoth('forge:bricks/slag')
   	   .requiresTool(true)
           .box(0,0,0,1,1,1,false)

  event.create('slag_brick_pressure_plate', 'stone_pressure_plate')
           .textureAll('kubejs:block/slag_bricks')
  	   .material('stone')
  	   .hardness(1)
           .resistance(1)
  	   .tagBlock('minecraft:mineable/pickaxe')
  	   .tagBlock('forge:needs_wood_tool')
  	   .tagBoth('minecraft:pressure_plates')
           .tagBoth('minecraft:stone_pressure_plates')
   	   .requiresTool(true)
  event.create('slag_brick_button', 'stone_button')
           .textureAll('kubejs:block/slag_bricks')
  	   .material('stone')
  	   .hardness(1)
           .resistance(1)
  	   .tagBlock('minecraft:mineable/pickaxe')
  	   .tagBlock('forge:needs_wood_tool')
  	   .tagBoth('minecraft:buttons')
  	   .tagBoth('minecraft:stone_buttons')
   	   .requiresTool(true)
  event.create('slag_brick_slab', 'slab')
           .textureAll('kubejs:block/slag_bricks')
  	   .material('stone')
  	   .hardness(5)
           .resistance(6)
  	   .tagBlock('minecraft:mineable/pickaxe')
  	   .tagBlock('forge:needs_wood_tool')
  	   .tagBoth('minecraft:slabs')
   	   .requiresTool(true)
  event.create('slag_brick_stairs', 'stairs')
           .textureAll('kubejs:block/slag_bricks')
  	   .material('stone')
  	   .hardness(5)
           .resistance(6)
  	   .tagBlock('minecraft:mineable/pickaxe')
  	   .tagBlock('forge:needs_wood_tool')
  	   .tagBoth('minecraft:stairs')
   	   .requiresTool(true)
  event.create('slag_brick_wall', 'wall')
           .textureAll('kubejs:block/slag_bricks')
  	   .material('stone')
  	   .hardness(5)
           .resistance(6)
  	   .tagBlock('minecraft:mineable/pickaxe')
  	   .tagBlock('forge:needs_wood_tool')
  	   .tagBoth('minecraft:walls')
  	   .tagBlock('tconstruct:platform_connections')
   	   .requiresTool(true)
  event.create('slag_brick_fence_gate', 'fence_gate')
           .textureAll('kubejs:block/slag_bricks')
  	   .material('stone')
  	   .hardness(5)
           .resistance(6)
  	   .tagBlock('minecraft:mineable/pickaxe')
  	   .tagBlock('forge:needs_wood_tool')
  	   .tagBoth('minecraft:fence_gates')
   	   .requiresTool(true)

  event.create('rich_slag_bricks','basic')
  	   .material('stone')
  	   .hardness(5)
           .resistance(6)
  	   .tagBlock('minecraft:mineable/pickaxe')
  	   .tagBlock('forge:needs_wood_tool')
  	   .tagBoth('forge:bricks')
  	   .tagBoth('forge:bricks/rich_slag')
   	   .requiresTool(true)
           .box(0,0,0,1,1,1,false)

  event.create('rich_slag_brick_pressure_plate', 'stone_pressure_plate')
           .textureAll('kubejs:block/rich_slag_bricks')
  	   .material('stone')
  	   .hardness(1)
           .resistance(1)
  	   .tagBlock('minecraft:mineable/pickaxe')
  	   .tagBlock('forge:needs_wood_tool')
  	   .tagBoth('minecraft:pressure_plates')
           .tagBoth('minecraft:stone_pressure_plates')
   	   .requiresTool(true)
  event.create('rich_slag_brick_button', 'stone_button')
           .textureAll('kubejs:block/rich_slag_bricks')
  	   .material('stone')
  	   .hardness(1)
           .resistance(1)
  	   .tagBlock('minecraft:mineable/pickaxe')
  	   .tagBlock('forge:needs_wood_tool')
  	   .tagBoth('minecraft:buttons')
  	   .tagBoth('minecraft:stone_buttons')
   	   .requiresTool(true)
  event.create('rich_slag_brick_slab', 'slab')
           .textureAll('kubejs:block/rich_slag_bricks')
  	   .material('stone')
  	   .hardness(5)
           .resistance(6)
  	   .tagBlock('minecraft:mineable/pickaxe')
  	   .tagBlock('forge:needs_wood_tool')
  	   .tagBoth('minecraft:slabs')
   	   .requiresTool(true)
  event.create('rich_slag_brick_stairs', 'stairs')
           .textureAll('kubejs:block/rich_slag_bricks')
  	   .material('stone')
  	   .hardness(5)
           .resistance(6)
  	   .tagBlock('minecraft:mineable/pickaxe')
  	   .tagBlock('forge:needs_wood_tool')
  	   .tagBoth('minecraft:stairs')
   	   .requiresTool(true)
  event.create('rich_slag_brick_wall', 'wall')
           .textureAll('kubejs:block/rich_slag_bricks')
  	   .material('stone')
  	   .hardness(5)
           .resistance(6)
  	   .tagBlock('minecraft:mineable/pickaxe')
  	   .tagBlock('forge:needs_wood_tool')
  	   .tagBoth('minecraft:walls')
  	   .tagBlock('tconstruct:platform_connections')
   	   .requiresTool(true)
  event.create('rich_slag_brick_fence_gate', 'fence_gate')
           .textureAll('kubejs:block/rich_slag_bricks')
  	   .material('stone')
  	   .hardness(5)
           .resistance(6)
  	   .tagBlock('minecraft:mineable/pickaxe')
  	   .tagBlock('forge:needs_wood_tool')
  	   .tagBoth('minecraft:fence_gates')
   	   .requiresTool(true)


  let rockwool = colour => {
                               event.create(colour+'_rockwool','basic')
                                    .textureAll('block/'+colour+'_shulker_box')
                                    .material('cake')
                                    .hardness(4).resistance(5)
                                    .tagBlock('minecraft:mineable/pickaxe')
  	                            .tagBlock('forge:needs_wood_tool')
  	                            .tagBoth('forge:rockwool')
  	                            .tagBoth('forge:rockwool/'+colour)
 	                            .tagBoth('forge:rockwool/stained')
                                    .box(0,0,0,1,1,1,false)
                             }
  rockwool('white')
  rockwool('light_gray')
  rockwool('gray')
  rockwool('black')
  rockwool('brown')
  rockwool('red')
  rockwool('orange')
  rockwool('yellow')
  rockwool('lime')
  rockwool('green')
  rockwool('cyan')
  rockwool('light_blue')
  rockwool('blue')
  rockwool('purple')
  rockwool('magenta')
  rockwool('pink')

  event.create('rockwool','basic')
  	   .material('cake')
  	   .hardness(4)
           .resistance(5)
  	   .tagBlock('minecraft:mineable/pickaxe')
  	   .tagBlock('forge:needs_wood_tool')
  	   .tagBoth('forge:rockwool')
  	   .tagBoth('forge:rockwool/colorless')
   	   .requiresTool(true)
           .box(0,0,0,1,1,1,false)

  event.create('treated_planks','basic')
  	   .material('wood')
  	   .hardness(4)
           .resistance(3)
  	   .tagBlock('minecraft:mineable/axe')
  	   .tagBlock('forge:needs_wood_tool')
  	   .tagBoth('minecraft:planks')
  	   .tagBoth('minecraft:non_flammable_wood')
   	   .requiresTool(true)

  event.create('treated_slab','slab')
           .textureAll('kubejs:block/treated_planks')
  	   .material('wood')
  	   .hardness(4)
           .resistance(3)
  	   .tagBlock('minecraft:mineable/axe')
  	   .tagBlock('forge:needs_wood_tool')
  	   .tagBoth('minecraft:slabs')
  	   .tagBoth('minecraft:wooden_slabs')
  	   .tagBoth('minecraft:non_flammable_wood')
   	   .requiresTool(true)

  event.create('treated_stairs','stairs')
           .textureAll('kubejs:block/treated_planks')
  	   .material('wood')
  	   .hardness(4)
           .resistance(3)
  	   .tagBlock('minecraft:mineable/axe')
  	   .tagBlock('forge:needs_wood_tool')
  	   .tagBoth('minecraft:stairs')
  	   .tagBoth('minecraft:wooden_stairs')
  	   .tagBoth('minecraft:non_flammable_wood')
   	   .requiresTool(true)

  event.create('treated_fence','fence')
           .textureAll('kubejs:block/treated_planks')
  	   .material('wood')
  	   .hardness(4)
           .resistance(3)
  	   .tagBlock('minecraft:mineable/axe')
  	   .tagBlock('forge:needs_wood_tool')
  	   .tagBoth('minecraft:fences')
  	   .tagBoth('minecraft:wooden_fences')
  	   .tagBoth('minecraft:non_flammable_wood')
   	   .requiresTool(true)

  event.create('treated_fence_gate','fence_gate')
           .textureAll('kubejs:block/treated_planks')
  	   .material('wood')
  	   .hardness(4)
           .resistance(3)
  	   .tagBlock('minecraft:mineable/axe')
  	   .tagBlock('forge:needs_wood_tool')
  	   .tagBoth('minecraft:fence_gates')
  	   .tagBoth('minecraft:wooden_fence_gates')
  	   .tagBoth('minecraft:non_flammable_wood')
   	   .requiresTool(true)

  event.create('treated_wall','wall')
           .textureAll('kubejs:block/treated_planks')
  	   .material('wood')
  	   .hardness(4)
           .resistance(3)
  	   .tagBlock('minecraft:mineable/axe')
  	   .tagBlock('forge:needs_wood_tool')
  	   .tagBoth('minecraft:walls')
  	   .tagBoth('minecraft:wooden_walls')
  	   .tagBoth('minecraft:non_flammable_wood')
   	   .requiresTool(true)

  event.create('treated_button','wooden_button')
           .textureAll('kubejs:block/treated_planks')
  	   .material('wood')
  	   .hardness(0.75)
           .resistance(0.75)
  	   .tagBlock('minecraft:mineable/axe')
  	   .tagBlock('forge:needs_wood_tool')
  	   .tagBoth('minecraft:buttons')
  	   .tagBoth('minecraft:wooden_buttons')
  	   .tagBoth('minecraft:non_flammable_wood')
   	   .requiresTool(true)

  event.create('treated_pressure_plate','wooden_pressure_plate')
           .textureAll('kubejs:block/treated_planks')
  	   .material('wood')
  	   .hardness(0.75)
           .resistance(0.75)
  	   .tagBlock('minecraft:mineable/axe')
  	   .tagBlock('forge:needs_wood_tool')
  	   .tagBoth('minecraft:pressure_plates')
  	   .tagBoth('minecraft:wooden_pressure_plates')
  	   .tagBoth('minecraft:non_flammable_wood')
   	   .requiresTool(true)

  event.create('treated_bookshelf','basic')
           .texture('north', 'kubejs:block/bookshelf/treated')
           .texture('south', 'kubejs:block/bookshelf/treated')
           .texture('west', 'kubejs:block/bookshelf/treated')
           .texture('east', 'kubejs:block/bookshelf/treated')
           .texture('up', 'kubejs:block/treated_planks')
           .texture('down', 'kubejs:block/treated_planks')
           .texture('particle', 'kubejs:block/bookshelf/treated')
  	   .material('wood')
  	   .hardness(4)
           .resistance(3)
  	   .tagBlock('minecraft:mineable/axe')
  	   .tagBlock('forge:needs_wood_tool')
  	   .tagBoth('forge:bookshelves')
  	   .tagBoth('minecraft:non_flammable_wood')
   	   .requiresTool(true)

  event.create('copper_component','basic')
           .texture('north', 'kubejs:block/case/copper_component_side')
           .texture('south', 'kubejs:block/case/copper_component_side')
           .texture('west', 'kubejs:block/case/copper_component_side')
           .texture('east', 'kubejs:block/case/copper_component_side')
           .texture('up', 'kubejs:block/case/copper_component_top')
           .texture('down', 'kubejs:block/case/copper_component_top')
           .texture('particle', 'kubejs:block/case/copper_component_top')
  	   .material('metal')
  	   .hardness(4)
           .resistance(3)
  	   .tagBlock('minecraft:mineable/pickaxe')
  	   .tagBlock('forge:needs_wood_tool')
  	   .tagBoth('minecraft:walls')
  	   .tagBoth('minecraft:walls/wooden')
  	   .tagBoth('minecraft:non_flammable_wood')
   	   .requiresTool(true)

  event.create('bloodshroom_bookshelf','basic')
           .texture('north', 'kubejs:block/bookshelf/bloodshroom')
           .texture('south', 'kubejs:block/bookshelf/bloodshroom')
           .texture('west', 'kubejs:block/bookshelf/bloodshroom')
           .texture('east', 'kubejs:block/bookshelf/bloodshroom')
           .texture('up', 'tconstruct:block/wood/bloodshroom/planks')
           .texture('down', 'tconstruct:block/wood/bloodshroom/planks')
           .texture('particle', 'kubejs:block/bookshelf/bloodshroom')
  	   .material('slime')
  	   .hardness(1.5)
           .resistance(1.5)
  	   .tagBlock('minecraft:mineable/axe')
  	   .tagBlock('byg:bookshelves')
  	   .tagBoth('forge:bookshelves')
  	   .tagBoth('c:bookshelves')
  event.create('greenheart_bookshelf','basic')
           .texture('north', 'kubejs:block/bookshelf/greenheart')
           .texture('south', 'kubejs:block/bookshelf/greenheart')
           .texture('west', 'kubejs:block/bookshelf/greenheart')
           .texture('east', 'kubejs:block/bookshelf/greenheart')
           .texture('up', 'tconstruct:block/wood/greenheart/planks')
           .texture('down', 'tconstruct:block/wood/greenheart/planks')
           .texture('particle', 'kubejs:block/bookshelf/greenheart')
  	   .material('slime')
  	   .hardness(1.5)
           .resistance(1.5)
  	   .tagBlock('minecraft:mineable/axe')
  	   .tagBlock('byg:bookshelves')
  	   .tagBoth('forge:bookshelves')
  	   .tagBoth('c:bookshelves')
  event.create('skyroot_bookshelf','basic')
           .texture('north', 'kubejs:block/bookshelf/skyroot')
           .texture('south', 'kubejs:block/bookshelf/skyroot')
           .texture('west', 'kubejs:block/bookshelf/skyroot')
           .texture('east', 'kubejs:block/bookshelf/skyroot')
           .texture('up', 'tconstruct:block/wood/skyroot/planks')
           .texture('down', 'tconstruct:block/wood/skyroot/planks')
           .texture('particle', 'kubejs:block/bookshelf/skyroot')
  	   .material('slime')
  	   .hardness(1.5)
           .resistance(1.5)
  	   .tagBlock('minecraft:mineable/axe')
  	   .tagBlock('byg:bookshelves')
  	   .tagBoth('forge:bookshelves')
  	   .tagBoth('c:bookshelves')
  event.create('rubberwood_bookshelf','basic')
           .texture('north', 'kubejs:block/bookshelf/rubberwood')
           .texture('south', 'kubejs:block/bookshelf/rubberwood')
           .texture('west', 'kubejs:block/bookshelf/rubberwood')
           .texture('east', 'kubejs:block/bookshelf/rubberwood')
           .texture('up', 'myrtrees:block/rubberwood_planks')
           .texture('down', 'myrtrees:block/rubberwood_planks')
           .texture('particle', 'kubejs:block/bookshelf/rubberwood')
  	   .material('wood')
  	   .hardness(1.5)
           .resistance(1.5)
  	   .tagBlock('minecraft:mineable/axe')
  	   .tagBlock('byg:bookshelves')
  	   .tagBoth('forge:bookshelves')
  	   .tagBoth('c:bookshelves')

  event.create('rubberwood_slab','slab')
           .textureAll('myrtrees:block/rubberwood_planks')
  	   .material('wood')
  	   .hardness(2)
           .resistance(3)
  	   .tagBlock('minecraft:mineable/axe')
  	   .tagBoth('minecraft:slabs')
  	   .tagBoth('minecraft:wooden_slabs')

  event.create('rubberwood_stairs','stairs')
           .textureAll('myrtrees:block/rubberwood_planks')
  	   .material('wood')
  	   .hardness(2)
           .resistance(3)
  	   .tagBlock('minecraft:mineable/axe')
  	   .tagBoth('minecraft:stairs')
  	   .tagBoth('minecraft:wooden_stairs')

  event.create('rubberwood_fence','fence')
           .textureAll('myrtrees:block/rubberwood_planks')
  	   .material('wood')
  	   .hardness(2)
           .resistance(3)
  	   .tagBlock('minecraft:mineable/axe')
  	   .tagBoth('minecraft:fences')
  	   .tagBoth('minecraft:wooden_fences')

  event.create('rubberwood_fence_gate','fence_gate')
           .textureAll('myrtrees:block/rubberwood_planks')
  	   .material('wood')
  	   .hardness(2)
           .resistance(3)
  	   .tagBlock('minecraft:mineable/axe')
  	   .tagBoth('minecraft:fence_gates')
  	   .tagBoth('minecraft:wooden_fence_gates')

  event.create('rubberwood_button','wooden_button')
           .textureAll('myrtrees:block/rubberwood_planks')
  	   .material('wood')
  	   .hardness(0.5)
           .resistance(0.5)
  	   .tagBlock('minecraft:mineable/axe')
  	   .tagBoth('minecraft:buttons')
  	   .tagBoth('minecraft:wooden_buttons')

  event.create('rubberwood_pressure_plate','wooden_pressure_plate')
           .textureAll('myrtrees:block/rubberwood_planks')
  	   .material('wood')
  	   .hardness(0.5)
           .resistance(0.5)
  	   .tagBlock('minecraft:mineable/axe')
  	   .tagBoth('minecraft:pressure_plates')
  	   .tagBoth('minecraft:wooden_pressure_plates')

  event.create('sculk_block','basic')
  	   .material('slime')
  	   .hardness(1)
           .resistance(0.7)
  	   .tagBlock('minecraft:mineable/hoe')

  event.create('wax_block','basic')
  	   .material('honey')
  	   .hardness(1)
           .resistance(0.7)
  	   .tagBlock('minecraft:mineable/shovel')
})