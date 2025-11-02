import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
  // App container
  appContainer: {
    flex: 1,
    backgroundColor: '#0d1117',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Game container
  gameContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 30,
  },

  // Board styles
  boardContainer: {
    alignItems: 'center',
  },
  boardRow: {
    flexDirection: 'row',
  },
  statusText: {
    color: '#58a6ff',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: '600',
  },

  // Board section
  boardSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },

  // Square styles
  square: {
    width: 90,
    height: 90,
    backgroundColor: '#161b22',
    borderWidth: 2,
    borderColor: '#30363d',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 3,
    borderRadius: 10,
  },
  squareText: {
    color: '#c9d1d9',
    fontSize: 36,
    fontWeight: 'bold',
  },

  // buttons
  controlsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    gap: 10,
  },
  button: {
    backgroundColor: '#21262d',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: {width: 2, height: 2},
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  // dropdown
  dropdownWrapper: {
    position: 'relative',
  },
  dropdownList: {
    position: 'absolute',
    bottom: 48,
    right: 0,
    width: 180,
    backgroundColor: '#1c1c1c',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 8,
    shadowOffset: { width: 1, height: 3 },
    zIndex: 50,
    elevation: 10,
    paddingVertical: 5,
  },
  dropdownItem: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderBottomColor: '#333',
    borderBottomWidth: 1,
  },
  dropdownItemText: {
    color: '#fff',
    fontSize: 14,
  },


  squareHighlight: {
    backgroundColor: '#238636',
  },
  input: {
    backgroundColor: '#21262d',
    color: '#fff',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
    width: 100,
    textAlign: 'center',
    marginBottom: 10,
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 10,
  },
  scoreText: {
    color: '#c9d1d9',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resetStatsButton: {
    backgroundColor: '#444',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  }

});
