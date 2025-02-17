ServerEvents.recipes(e => {

    //Removing thingy for (create/smithing.js)
    const createsmithremove = [
        'create:shaft',
        'create:cogwheel',
        'create:large_cogwheel',
        'create:copper_valve_handle',
        'create:mechanical_press',
        'create:mechanical_mixer',
        'create:mechanical_drill',
        'create:deployer',
        'create:mechanical_saw',
        'create:fluid_pipe',
        'create:mechanical_pump',
        'create:smart_fluid_pipe',
        'create:fluid_valve',
        'create:spout',
        'create:fluid_tank',
        'create_dd:bronze_drill',
        'create_dd:bronze_saw'
    ];

    createsmithremove.forEach(element => {
        e.remove({ output: element });});
    
    //Removing thingy for (create/crafting.js)
    const createcraftremove = [
        'create:shaft',
        'create:cogwheel',
        'create:large_cogwheel',
        'create:copper_valve_handle'
    ];

    createcraftremove.forEach(element => {
        e.remove({ output: element });});
    
    e.remove({ output: "minecraft:crafting_table" })
    e.replaceInput({ input: 'minecraft:crafting_table' }, 'minecraft:crafting_table', '#charm:crafting_table')

    //minecraft
    //e.remove({ mod: 'minecraft' }) //Temp - gonna test something.

    //APOTH
    e.remove({ mod: 'apotheosis' }) //BookShelfs Unaffected
    e.remove({ mod: 'apotheotic_additions' })

    //create
    //e.remove({ mod: 'create' })
    e.remove({ mod: 'ad_astra' })
    e.remove({ mod: 'create_new_age' })
    e.remove({ mod: 'railways' })
    e.remove({ mod: 'tfmg' })
    e.remove({ mod: 'createlowheated' })
    e.remove({ mod: 'compressedcreativity' })
    e.remove({ mod: 'create_dd' })
    e.remove({ mod: 'create_connected' })
    //e.remove({ mod: 'createsifter' })

    e.remove({ mod: 'pneumaticcraft' })

    //ae2
    e.remove({ mod: 'ae2' })
    e.remove({ mod: 'ae2wtlib' })
    e.remove({ mod: 'appmek' })
    e.remove({ mod: 'expatternprovider' })
    e.remove({ mod: 'megacells' })
    e.remove({ mod: 'arseng' })

    //mekanism
    e.remove({ mod: 'mekanism' })
    e.remove({ mod: 'mekanismgenerators' })

    //enderchests/endertanks
    e.remove({ mod: 'enderchests' })
    e.remove({ mod: 'endertanks' })

    //gtceu
    //e.remove({ mod: 'gtceu' })
    //e.remove({ mod: 'gcyr' })

    //farmersdelight
    e.remove({ mod: 'solonion' })
    e.remove({ mod: 'farmersdelight' })
    e.remove({ mod: 'cuisinedelight' })
    e.remove({ mod: 'ends_delight' })
    e.remove({ mod: 'delightful' })
    e.remove({ mod: 'nethersdelight' })

    //ars_nonveau
    e.remove({ mod: 'ars_nouveau' })
    e.remove({ mod: 'ars_ocultas' })
    e.remove({ mod: 'ars_instrumentum' })

    //BloodMagic
    e.remove({ mod: 'bloodmagic' })
    e.remove({ mod: 'tomeofblood' })

    //cctweaked
    //e.remove({ mod: 'computercraft' })
    e.remove({ mod: 'advancedperipherals' })
    e.remove({ mod: 'cccbridge'})

    //Storages
    e.remove({ mod: 'sophisticatedbackpacks' })
    e.remove({ mod: 'sophisticatedstorage' })
    e.remove({ mod: 'functionalstorage' })
    e.remove({ mod: 'storagenetwork' })

    //occultism
    e.remove({ mod: 'occultism' })

    //Misc
    e.remove({ mod: 'silentgear' })
    e.remove({ mod: 'friendsandfoes' })
    e.remove({ mod: 'betterarcheology' })
    e.remove({ mod: 'buildinggadgets2' })
    e.remove({ mod: 'alexscaves' })
    e.remove({ mod: 'gateways' })
    e.remove({ mod: 'hyperbox' })
    e.remove({ mod: 'minecards' })
    e.remove({ mod: 'adpother' })
    e.remove({ mod: 'weather2' })
    e.remove({ mod: 'silentcompat' })
    e.remove({ mod: 'tiab' })
    e.remove({ mod: 'torchmaster' })
    e.remove({ mod: 'fluxnetworks' })
    e.remove({ mod: 'treasure2' })
    //e.remove({ mod: 'alchemistry' })
    e.remove({ mod: 'hostilenetworks' })
    e.remove({ mod: 'entangled' })
    e.remove({ mod: "pipez" })
    e.remove({ mod: "gag"})



    console.log('Removing the World!!!')
})//End Of File


GTCEuServerEvents.oreVeins(event => {
    event.removeAll()
})
