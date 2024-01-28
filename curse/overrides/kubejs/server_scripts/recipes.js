onEvent('recipes', event => {
  event.replaceInput('minecraft:leather', 'kubejs:tanned_leather')
  event.replaceInput({mod: 'kubejs'}, 'kubejs:tanned_leather', 'minecraft:leather')

  event.replaceInput('pneumaticcraft:vegetable_oil', 'createaddition:seed_oil')
  event.replaceInput('tconstruct:copper_nugget', 'create:copper_nugget')
  event.replaceInput('alloyed:steel_nugget', 'alloyedguns:steel_nugget')
  event.replaceInput('overchisel:copper_plate', 'create:copper_sheet')
  event.replaceInput('overchisel:copper_rod', 'createaddition:copper_rod')
  event.replaceInput('chemlib:copper_plate', 'create:copper_sheet')

  event.replaceInput('chemlib:zinc_ingot', 'create:zinc_ingot')
  event.replaceInput('chemlib:zinc_nugget', 'create:zinc_nugget')
  event.replaceInput('chemlib:zinc_metal_block', 'create:zinc_block')
  event.replaceInput('chemlib:zinc_plate', 'create:zinc_sheet')

  event.replaceInput('chemlib:lead_ingot', 'kubejs:lead_ingot')
  event.replaceInput('chemlib:lead_nugget', 'kubejs:lead_nugget')
  event.replaceInput('chemlib:lead_metal_block', 'kubejs:lead_block')
  event.replaceInput('chemlib:lead_plate', 'kubejs:lead_plate')
  event.replaceInput('chemlib:lead_dust', 'kubejs:lead_dust')

  event.replaceInput('chemlib:nickel_ingot', 'kubejs:nickel_ingot')
  event.replaceInput('chemlib:nickel_nugget', 'kubejs:nickel_nugget')
  event.replaceInput('chemlib:nickel_metal_block', 'kubejs:nickel_block')
  event.replaceInput('chemlib:nickel_plate', 'kubejs:nickel_plate')
  event.replaceInput('chemlib:nickel_dust', 'kubejs:nickel_dust')

  event.replaceInput('chemlib:silver_ingot', 'kubejs:silver_ingot')
  event.replaceInput('chemlib:silver_nugget', 'kubejs:silver_nugget')
  event.replaceInput('chemlib:silver_metal_block', 'kubejs:silver_block')
  event.replaceInput('chemlib:silver_plate', 'kubejs:silver_plate')
  event.replaceInput('chemlib:silver_dust', 'kubejs:silver_dust')

  event.replaceInput('chemlib:tin_ingot', 'kubejs:tin_ingot')
  event.replaceInput('chemlib:tin_nugget', 'kubejs:tin_nugget')
  event.replaceInput('chemlib:tin_metal_block', 'kubejs:tin_block')
  event.replaceInput('chemlib:tin_plate', 'kubejs:tin_plate')
  event.replaceInput('chemlib:tin_dust', 'kubejs:tin_dust')

  event.replaceInput('chemlib:cobalt_ingot', 'tconstruct:cobalt_ingot')
  event.replaceInput('chemlib:cobalt_nugget', 'tconstruct:cobalt_nugget')
  event.replaceInput('chemlib:cobalt_metal_block', 'tconstruct:cobalt_block')

  event.replaceInput({mod: 'createchromaticreturn'}, 'createchromaticreturn:andesite_component', 'kubejs:andesite_machine')
  event.replaceInput({mod: 'createchromaticreturn'}, 'createchromaticreturn:brass_component', 'kubejs:brass_machine')


  event.replaceOutput('pneumaticcraft:vegetable_oil', 'createaddition:seed_oil')
  event.replaceOutput('tconstruct:copper_nugget', 'create:copper_nugget')
  event.replaceOutput('alloyed:steel_nugget', 'alloyedguns:steel_nugget')
  event.replaceOutput('overchisel:copper_plate', 'create:copper_sheet')
  event.replaceOutput('overchisel:copper_rod', 'createaddition:copper_rod')
  event.replaceOutput('chemlib:copper_plate', 'create:copper_sheet')

  event.replaceOutput('chemlib:zinc_ingot', 'create:zinc_ingot')
  event.replaceOutput('chemlib:zinc_nugget', 'create:zinc_nugget')
  event.replaceOutput('chemlib:zinc_metal_block', 'create:zinc_block')
  event.replaceOutput('chemlib:zinc_plate', 'create:zinc_sheet')

  event.replaceOutput('chemlib:lead_ingot', 'kubejs:lead_ingot')
  event.replaceOutput('chemlib:lead_nugget', 'kubejs:lead_nugget')
  event.replaceOutput('chemlib:lead_metal_block', 'kubejs:lead_block')
  event.replaceOutput('chemlib:lead_plate', 'kubejs:lead_plate')
  event.replaceOutput('chemlib:lead_dust', 'kubejs:lead_dust')

  event.replaceOutput('chemlib:nickel_ingot', 'kubejs:nickel_ingot')
  event.replaceOutput('chemlib:nickel_nugget', 'kubejs:nickel_nugget')
  event.replaceOutput('chemlib:nickel_metal_block', 'kubejs:nickel_block')
  event.replaceOutput('chemlib:nickel_plate', 'kubejs:nickel_plate')
  event.replaceOutput('chemlib:nickel_dust', 'kubejs:nickel_dust')

  event.replaceOutput('chemlib:silver_ingot', 'kubejs:silver_ingot')
  event.replaceOutput('chemlib:silver_nugget', 'kubejs:silver_nugget')
  event.replaceOutput('chemlib:silver_metal_block', 'kubejs:silver_block')
  event.replaceOutput('chemlib:silver_plate', 'kubejs:silver_plate')
  event.replaceOutput('chemlib:silver_dust', 'kubejs:silver_dust')

  event.replaceOutput('chemlib:tin_ingot', 'kubejs:tin_ingot')
  event.replaceOutput('chemlib:tin_nugget', 'kubejs:tin_nugget')
  event.replaceOutput('chemlib:tin_metal_block', 'kubejs:tin_block')
  event.replaceOutput('chemlib:tin_plate', 'kubejs:tin_plate')
  event.replaceOutput('chemlib:tin_dust', 'kubejs:tin_dust')

  event.replaceOutput('chemlib:cobalt_ingot', 'tconstruct:cobalt_ingot')
  event.replaceOutput('chemlib:cobalt_nugget', 'tconstruct:cobalt_nugget')
  event.replaceOutput('chemlib:cobalt_metal_block', 'tconstruct:cobalt_block')

  event.replaceOutput('#c:workbenches', 'minecraft:crafting_table')

  event.replaceInput({output: '#kubejs:scw'}, 'minecraft:spruce_planks', '#minecraft:planks')
  event.replaceInput({output: '#kubejs:scw'}, 'minecraft:spruce_button', '#minecraft:wooden_buttons')
  event.replaceInput({output: '#kubejs:ocw'}, 'minecraft:oak_planks', 'minecraft:stone')
  event.replaceInput({output: '#kubejs:ocw'}, 'minecraft:oak_button', 'minecraft:stone_button')
  event.remove({output: '#kubejs:removed'})
})
onEvent('item.tags', event => {

  event.remove('forge:nuggets/copper', 'tconstruct:copper_nugget')
  event.remove('forge:nuggets/steel', 'alloyed:steel_nugget')
  event.remove('forge:plates/copper', 'overchisel:copper_plate')
  event.remove('forge:rods/copper', 'overchisel:copper_rod')
  event.remove('forge:plates/copper', 'chemlib:copper_plate')
  event.remove('forge:plates/gold', 'chemlib:gold_plate')
  event.remove('forge:plates/iron', 'chemlib:iron_plate')

  event.remove('forge:ingots/zinc', 'chemlib:zinc_ingot')
  event.remove('forge:nuggets/zinc', 'chemlib:zinc_nugget')
  event.remove('forge:storage_blocks/zinc', 'chemlib:zinc_metal_block')
  event.remove('forge:plates/zinc', 'chemlib:zinc_plate')

  event.remove('forge:ingots/lead', 'chemlib:lead_ingot')
  event.remove('forge:plates/lead', 'chemlib:lead_plate')
  event.remove('forge:nuggets/lead', 'chemlib:lead_nugget')
  event.remove('forge:storage_blocks/lead', 'chemlib:lead_metal_block')
  event.remove('forge:dusts/lead', 'chemlib:lead_dust')

  event.remove('forge:dusts/diamond', 'createaddition:diamond_grit')

  event.remove('forge:ingots/nickel', 'chemlib:nickel_ingot')
  event.remove('forge:plates/nickel', 'chemlib:nickel_plate')
  event.remove('forge:nuggets/nickel', 'chemlib:nickel_nugget')
  event.remove('forge:storage_blocks/nickel', 'chemlib:nickel_metal_block')
  event.remove('forge:dusts/nickel', 'chemlib:nickel_dust')

  event.remove('forge:ingots/silver', 'chemlib:silver_ingot')
  event.remove('forge:plates/silver', 'chemlib:silver_plate')
  event.remove('forge:nuggets/silver', 'chemlib:silver_nugget')
  event.remove('forge:storage_blocks/silver', 'chemlib:silver_metal_block')
  event.remove('forge:dusts/silver', 'chemlib:silver_dust')

  event.remove('forge:ingots/tin', 'chemlib:tin_ingot')
  event.remove('forge:plates/tin', 'chemlib:tin_plate')
  event.remove('forge:nuggets/tin', 'chemlib:tin_nugget')
  event.remove('forge:storage_blocks/tin', 'chemlib:tin_metal_block')
  event.remove('forge:dusts/tin', 'chemlib:tin_dust')
  event.remove('forge:silicon', 'ae2:silicon')

  event.remove('forge:ingots/cobalt', 'chemlib:cobalt_ingot')
  event.remove('forge:nuggets/cobalt', 'chemlib:cobalt_nugget')
  event.remove('forge:storage_blocks/cobalt', 'chemlib:cobalt_metal_block')


  event.add('forge:nuggets/experience', 'create:experience_nugget')
  event.add('forge:plates', 'create_things_and_misc:experience_sheet')
  event.add('forge:plates/experience', 'create_things_and_misc:experience_sheet')

  event.add('forge:gems', 'create:rose_quartz')
  event.add('forge:gems/rose_quartz', 'create:rose_quartz')

  event.add('forge:ingots', 'create:polished_rose_quartz')
  event.add('forge:ingots/rose_quartz', 'create:polished_rose_quartz')

  event.add('forge:ingots', 'create:andesite_alloy')
  event.add('forge:ingots/andesite_alloy', 'create:andesite_alloy')

  event.add('forge:plates', 'create_things_and_misc:rose_quartz_sheet')
  event.add('forge:plates/rose_quartz', 'create_things_and_misc:rose_quartz_sheet')

  event.add('forge:dusts/sky_stone', 'ae2:sky_dust')
  event.add('forge:nuggets/steel', 'alloyedguns:steel_nugget')
  event.add('forge:coal_coke', 'kubejs:coke')

  event.add('forge:ingots', 'createchromaticreturn:industrium_ingot')
  event.add('forge:ingots/industrium', 'createchromaticreturn:industrium_ingot')

  event.add('forge:ingots', 'createchromaticreturn:refined_radiance')
  event.add('forge:ingots/refined_radiance', 'createchromaticreturn:refined_radiance')

  event.add('forge:ingots', 'createchromaticreturn:fortunite_bar')
  event.add('forge:ingots/fortunite', 'createchromaticreturn:fortunite_bar')

  event.add('forge:ingots', 'createchromaticreturn:shadow_steel')
  event.add('forge:ingots/shadow_steel', 'createchromaticreturn:shadow_steel')

  event.add('forge:ingots', 'createchromaticreturn:chromatic_compound')
  event.add('forge:ingots/chromatic_compound', 'createchromaticreturn:chromatic_compound')

  event.add('minecraft:coal_blocks', 'quark:charcoal_block')
  event.add('minecraft:coal_blocks', 'minecraft:coal_block')

  event.add('forge:stained_glass', 'quark:dirty_glass')
  event.add('forge:glass/silica', 'quark:dirty_glass')

  event.add('forge:glass/silica', 'create:framed_glass')
  event.add('forge:glass/silica', 'create:horizontal_framed_glass')
  event.add('forge:glass/silica', 'create:vertical_framed_glass')
  event.add('forge:glass/silica', 'create:tiled_glass')

  event.add('forge:stained_glass_panes', 'quark:dirty_glass_pane')
  event.add('forge:glass_panes/silica', 'quark:dirty_glass_pane')

  event.add('forge:glass_panes/silica', 'create:framed_glass_pane')
  event.add('forge:glass_panes/silica', 'create:horizontal_framed_glass_pane')
  event.add('forge:glass_panes/silica', 'create:vertical_framed_glass_pane')
  event.add('forge:glass_panes/silica', 'create:tiled_glass_pane')

  event.add('kubejs:melt_dacite', 'byg:dacite')
  event.add('kubejs:melt_dacite', 'byg:dacite_cobblestone')
  event.add('kubejs:melt_dacite', 'byg:dacite_tile')
  event.add('kubejs:melt_dacite', 'byg:dacite_bricks')

  event.add('kubejs:melt_dacite', 'byg:dacite_stairs')
  event.add('kubejs:melt_dacite', 'byg:dacite_cobblestone_stairs')
  event.add('kubejs:melt_dacite', 'byg:dacite_tile_stairs')
  event.add('kubejs:melt_dacite', 'byg:dacite_brick_stairs')

  event.add('kubejs:melt_dacite', 'byg:dacite_wall')
  event.add('kubejs:melt_dacite', 'byg:dacite_cobblestone_wall')
  event.add('kubejs:melt_dacite', 'byg:dacite_tile_wall')
  event.add('kubejs:melt_dacite', 'byg:dacite_brick_wall')

  event.add('kubejs:melt_dacite_slab', 'byg:dacite_slab')
  event.add('kubejs:melt_dacite_slab', 'byg:dacite_cobblestone_slab')
  event.add('kubejs:melt_dacite_slab', 'byg:dacite_tile_slab')
  event.add('kubejs:melt_dacite_slab', 'byg:dacite_brick_slab')

  event.add('kubejs:melt_slag', '#forge:storage_blocks/slag')
  event.add('kubejs:melt_slag', '#forge:bricks/slag')
  event.add('kubejs:melt_slag', 'kubejs:slag_wall')
  event.add('kubejs:melt_slag', 'kubejs:slag_brick_wall')

  event.add('kubejs:melt_slag_gem', 'kubejs:slag_button')
  event.add('kubejs:melt_slag_gem', '#forge:slag')

  event.add('kubejs:melt_slag_brick', 'kubejs:slag_brick_button')
  event.add('kubejs:melt_slag_brick', '#forge:ingots/slag')

  event.add('kubejs:melt_slag_slab', 'kubejs:slag_slab')
  event.add('kubejs:melt_slag_slab', 'kubejs:slag_brick_slab')

  event.add('kubejs:melt_slag_stairs', 'kubejs:slag_stairs')
  event.add('kubejs:melt_slag_stairs', 'kubejs:slag_brick_stairs')

  event.add('kubejs:melt_rich_slag', '#forge:storage_blocks/rich_slag')
  event.add('kubejs:melt_rich_slag', '#forge:bricks/rich_slag')
  event.add('kubejs:melt_rich_slag', 'kubejs:rich_slag_wall')
  event.add('kubejs:melt_rich_slag', 'kubejs:rich_slag_brick_wall')

  event.add('kubejs:melt_rich_slag_gem', 'kubejs:rich_slag_button')
  event.add('kubejs:melt_rich_slag_gem', '#forge:rich_slag')

  event.add('kubejs:melt_rich_slag_brick', 'kubejs:rich_slag_brick_button')
  event.add('kubejs:melt_rich_slag_brick', '#forge:ingots/rich_slag')

  event.add('kubejs:melt_rich_slag_slab', 'kubejs:rich_slag_slab')
  event.add('kubejs:melt_rich_slag_slab', 'kubejs:rich_slag_brick_slab')

  event.add('kubejs:melt_rich_slag_stairs', 'kubejs:rich_slag_stairs')
  event.add('kubejs:melt_rich_slag_stairs', 'kubejs:rich_slag_brick_stairs')

  event.add('byg:mushrooms_for_foragers_table', '#forge:mushrooms')

  event.remove('forge:sandstone', 'byg:windswept_sandstone_pillar')
  event.remove('c:sandstones', 'byg:windswept_sandstone_pillar')
  event.add('forge:stripped_logs', 'byg:windswept_sandstone_pillar')
  event.add('minecraft:logs', 'byg:windswept_sandstone_pillar')
  event.add('minecraft:nonflammable_wood', 'byg:windswept_sandstone_pillar')

  event.remove('forge:sandstone', 'byg:windswept_sandstone_pillar')
  event.remove('c:sandstones', 'byg:windswept_sandstone_pillar')
  event.add('forge:stripped_logs', 'byg:windswept_sandstone_pillar')
  event.add('minecraft:logs', 'byg:windswept_sandstone_pillar')
  event.add('minecraft:nonflammable_wood', 'byg:windswept_sandstone_pillar')

  event.add('forge:stripped_wood', 'quark:iron_pillar')
  event.add('minecraft:logs', 'quark:iron_pillar')
  event.add('minecraft:nonflammable_wood', 'quark:iron_pillar')

  event.add('forge:slimeballs', 'overchisel:resin_bottle')
  event.add('forge:slimeballs', 'byg:embur_gel_ball')

  event.add('minecraft:sand', 'byg:quartzite_sand')
  event.remove('create_enchantment_industry:ink_ingredient', 'minecraft:ink_sac')
  event.add('create_enchantment_industry:ink_ingredient', 'createchromaticreturn:carbon_powder')

  event.add('forge:berries', 'byg:holly_berries')
  event.add('forge:berries', 'byg:nightshade_berries')
  event.add('forge:berries', 'byg:crimson_berries')
  event.add('forge:berries', 'byg:blueberries')
})
onEvent('block.tags', event => {
  event.remove('forge:storage_blocks/lead', 'chemlib:lead_metal_block')
  event.remove('forge:storage_blocks/nickel', 'chemlib:nickel_metal_block')
  event.remove('forge:storage_blocks/silver', 'chemlib:silver_metal_block')
  event.remove('forge:storage_blocks/tin', 'chemlib:tin_metal_block')
  event.remove('forge:storage_blocks/zinc', 'chemlib:zinc_metal_block')
  event.remove('forge:storage_blocks/cobalt', 'chemlib:cobalt_metal_block')
  event.add('minecraft:coal_blocks', 'quark:charcoal_block')
  event.add('minecraft:coal_blocks', 'minecraft:coal_block')

  event.add('forge:stained_glass', 'quark:dirty_glass')
  event.add('forge:glass/silica', 'quark:dirty_glass')

  event.add('forge:glass/silica', 'create:framed_glass')
  event.add('forge:glass/silica', 'create:horizontal_framed_glass')
  event.add('forge:glass/silica', 'create:vertical_framed_glass')
  event.add('forge:glass/silica', 'create:tiled_glass')

  event.add('forge:stained_glass_panes', 'quark:dirty_glass_pane')
  event.add('forge:glass_panes/silica', 'quark:dirty_glass_pane')

  event.add('forge:glass_panes/silica', 'create:framed_glass_pane')
  event.add('forge:glass_panes/silica', 'create:horizontal_framed_glass_pane')
  event.add('forge:glass_panes/silica', 'create:vertical_framed_glass_pane')
  event.add('forge:glass_panes/silica', 'create:tiled_glass_pane')

  event.remove('minecraft:mineable/pickaxe', 'byg:windswept_sandstone_pillar')
  event.remove('forge:sandstone', 'byg:windswept_sandstone_pillar')
  event.remove('c:sandstones', 'byg:windswept_sandstone_pillar')
  event.add('minecraft:mineable/axe', 'byg:windswept_sandstone_pillar')
  event.add('forge:stripped_logs', 'byg:windswept_sandstone_pillar')
  event.add('minecraft:logs', 'byg:windswept_sandstone_pillar')
  event.add('minecraft:nonflammable_wood', 'byg:windswept_sandstone_pillar')
  event.add('forge:needs_wood_tool', 'byg:windswept_sandstone_pillar')

  event.remove('minecraft:mineable/pickaxe', 'quark:iron_pillar')
  event.remove('forge:needs_stone_tool', 'quark:iron_pillar')
  event.add('forge:needs_wood_tool', 'quark:iron_pillar')
  event.add('minecraft:mineable/axe', 'quark:iron_pillar')

  event.add('minecraft:sand', 'byg:quartzite_sand')
})
onEvent('fluid.tags', event => {
  event.remove('forge:experience', 'industrialforegoing:essence')
  event.remove('forge:plantoil', 'pneumaticcraft:vegetable_oil')
  event.add('forge:essence', 'industrialforegoing:essence')
  event.add('forge:tannin', 'kubejs:tannin')
  event.add('forge:volatile_sky_liquid', 'kubejs:volatile_sky_liquid')
  event.add('forge:hydrogen', 'chemlib:hydrogen_fluid')
  event.add('forge:oxygen', 'chemlib:oxygen_fluid')
  event.add('forge:ethylene', 'chemlib:ethylene_fluid')
  event.add('forge:ethanol', 'chemlib:ethanol_fluid')
  event.add('forge:methane', 'chemlib:methane_fluid')
  event.add('forge:ethane', 'chemlib:ethane_fluid')
  event.add('forge:propane', 'chemlib:propane_fluid')
  event.add('forge:butane', 'chemlib:butane_fluid')
  event.add('forge:pentane', 'chemlib:pentane_fluid')
  event.add('forge:hexane', 'chemlib:hexane_fluid')
  event.add('forge:natural_gas', 'kubejs:natural_gas')
  event.add('forge:crude_oil', 'kubejs:creosote_oil')
})